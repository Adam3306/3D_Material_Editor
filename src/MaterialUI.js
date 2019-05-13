import React from "react";
import { SketchPicker } from "react-color";
import BABYLON from "babylonjs";
import Select from "react-select";
import "./App.css";

class MaterialItemUI extends React.PureComponent {
  constructor(props) {
    super(props);
    {
    }
    this.state = {
      color: this.props.material
        ? this.props.material.specularColor
        : BABYLON.Vector3(1, 0, 1),
      ambientColor: this.props.material
        ? this.props.material.diffuseColor
        : BABYLON.Vector3(1, 0, 1),
      diffuseColor: this.props.material
        ? this.props.material.emissiveColor
        : BABYLON.Vector3(1, 0, 1),
      textureOptions: [],
      selectedTexture: null,
      textureMenuIsOpen: false,
      light: false
    };
  }

  handleColorChange = (color, event, state) => {
    if (this.props.material) {
      console.log(color.rgb);
      let pickedColor = new BABYLON.Color3(
        color.rgb.r / 255.0,
        color.rgb.g / 255.0,
        color.rgb.b / 255.0
      );

      if (state === "ambientColor") {
        this.props.material.setSpecularColor(pickedColor);
        this.setState({ ambientColor: color.rgb });
      } else if (state === "diffuseColor") {
        this.props.material.setDiffuseColor(pickedColor);
        this.setState({ diffuseColor: color.rgb });
      } else {
        this.setState({ color: color.rgb });
        this.props.material.setEmissiveColor(pickedColor);
      }
    }
  };

  handleTextureSelectorChange = selectedOption => {
    this.setState({
      selectedTexture: selectedOption,
      textureMenuIsOpen: false
    });
    this.props.material.AddNewTexture(selectedOption.value);
  };

  OnAddNewtexture = () => {
    var availableTextures = this.props.material.GetAvailableTextures();
    this.setState({
      textureOptions: availableTextures,
      textureMenuIsOpen: true
    });
    // this.refs.textureSelect.click();
    // this.refs.ImagePickerRef.click();
  };

  renderTextures = () =>
  {
    let tempArr = this.props.material.getActiveTextures();
    let ret = tempArr.map(item => {
      let name = item.name.replace('textures/','').replace('.jpg','');
      return (
        <div
          className="textureTitle"
          style={{ padding: "15px" }}
          key={item}
      >
        {name}
        <img
          src={item.url}
          width={"20"}
          height={"20"}
          style={{ marginLeft: 15 }}
          alt={item.name}
        />
        <a
          className="deleteTexture"
          href="#"
          onMouseUp={() => {
            this.props.material[name] = null;
            this.forceUpdate();
            console.log(this.props.material.getActiveTextures())
          }}
        >
          ✖
        </a>
      </div>
      )
    })

    return ret;
  }

  render() {
    return this.props.material ? (
      <div>
        <div className="mSmPStyle">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="colorPickerContainer">
              <div className="Colors">
                <div stlye={{ padding: "10px" }}>Diffuse color</div>
              </div>
              <SketchPicker
                color={this.state.ambientColor}
                onChangeComplete={(color, event) =>
                  this.handleColorChange(color, event, "ambientColor")
                }
                disableAlpha
              />
            </div>
            <div className="colorPickerContainer">
              <div className="Colors">
                <div stlye={{ padding: "10px" }}>Emissive color</div>
              </div>
              <SketchPicker
                color={this.state.diffuseColor}
                onChangeComplete={(color, event) =>
                  this.handleColorChange(color, event, "diffuseColor")
                }
                disableAlpha
              />
            </div>
            <div className="colorPickerContainer">
              <div className="Colors">
                <div stlye={{ padding: "10px" }}>Specular color</div>
              </div>
              <SketchPicker
                color={this.state.color}
                onChangeComplete={(color, event) =>
                  this.handleColorChange(color, event, "color")
                }
                disableAlpha
              />
            </div>
          </div>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              textAlign: "center"
            }}
            onClick={this.OnAddNewtexture}
          >
            Click to add texture
          </button>
          <Select
            //value={this.state.selectedTexture}
            onChange={this.handleTextureSelectorChange}
            options={this.state.textureOptions}
            ref="textureSelect"
            menuIsOpen={this.state.textureMenuIsOpen}
          />
          
          {this.renderTextures()}

          {/* <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} > onPointerDown={() => this.props.material.setTexture()}>add texture</button> */}
        </div>
      </div>
    ) : null;
  }
}

export default MaterialItemUI;
