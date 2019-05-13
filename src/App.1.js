import React, { Component } from "react";
import "./App.css";
import BABYLON from "babylonjs";
import { ImagePicker } from "react-file-picker";
import Select from "react-select";
import Collapsible from "react-collapsible";
import { SketchPicker } from "react-color";

import { setValTo } from "./utilities/functions";
import { WIREFRAME, DISABLE_LIGHTNING, POINTS_CLOUD, options } from "./utilities/constants";
import {
  Box,
  Cylinder,
  Torus,
  TorusKnot,
  Polygon,
  Sphere,
  Plane,
} from "./components/defaultObjects";
import Slider from "./components/common/Slider";
import { showAxis } from "./components/Axis";
import MyMaterial from "../src/components/Material/Material";

class App extends Component {
  state = {
    myObj: null,
    selectedOption: options[0],
    m_axisNeed: true,
    rgbColor: new BABYLON.Vector3(1, 0, 0),
  };

  componentDidMount() {
    this.m_Canvas = document.getElementById("rendercanvas");
    this.m_Canvas.height = window.innerHeight;
    this.m_Canvas.width = window.innerWidth / 2;
    this.m_Engine = new BABYLON.Engine(this.m_Canvas);

    this.m_Scene = this.createScene(this.m_Engine, this.m_Canvas);

    setInterval(() => {
      this.m_Scene.render();
    }, 100);
  }

  createScene(engine, canvas) {
    var scene = new BABYLON.Scene(engine);
    //var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(100, 100, 100), scene);
    // var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
    var light = new BABYLON.DirectionalLight(
      "DirectionalLight",
      new BABYLON.Vector3(1, 1, 1),
      scene
    );

    var light = new BABYLON.DirectionalLight(
      "DirectionalLight",
      new BABYLON.Vector3(-1, -1, -1),
      scene
    );

    // light.specular = new BABYLON.Color3(0, 1, 0);
    // light.groundColor = new BABYLON.Color3(0, 1, 0);

    // var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0.8,
      40,
      new BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);

    camera.onViewMatrixChangedObservable.add(() => {
      this.m_Scene.render();
    });
    // var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
    //Boxes

    //box1.position.x = -20;
    if (this.state.m_axisNeed) {
      //   showAxis(scene, 100);
    }

    // this.state.myObj = BABYLON.Mesh.CreateCylinder("asd", 123, 100, 10, 10, 5, scene);
    // this.state.myObj = BABYLON.Mesh.CreateTorus("asd", 10, 2, 100, scene, true, 4);
    this.state.myObj = new Box("box", 2.0, scene, new BABYLON.Vector3(5, 0, 0));
    this.state.box1 = BABYLON.Mesh.CreateBox("Box1", 3.0, scene);

    //myObj.addToScene("Box1", 20.0, scene, new BABYLON.Vector3(-20, 0, 0));

    return scene;
  }

  remove = () => {
    if (this.state.myObj != null) {
      this.state.myObj.remove();
      this.setState({ myObj: null });
    } else {
      // TODO: alert
    }
  };

  add = () => {
    console.log(this.state.selectedOption.value);
    const { value, label } = this.state.selectedOption;
    if (this.state.myObj == null) {
      console.log(value);
      switch (value) {
        case "box":
          this.setState({ myObj: new Box(label, 2.0, this.scene, new BABYLON.Vector3(0, 0, 0)) });
          break;
        case "cylinder":
          this.setState({
            myObj: new Cylinder("cyl", 2.0, 4.0, this.scene, new BABYLON.Vector3(0, 0, 0)),
          });
          break;
        case "torus":
          this.setState({
            myObj: new Torus("torus", 2.0, this.scene, new BABYLON.Vector3(0, 0, 0)),
          });
          break;
        case "torusknot":
          this.setState({
            myObj: new TorusKnot("torusknot", 2.0, this.scene, new BABYLON.Vector3(0, 0, 0)),
          });
          break;
        case "polygon":
          this.setState({
            myObj: new Polygon("torus", 2.0, this.scene, new BABYLON.Vector3(0, 0, 0)),
          });
          break;
        case "sphere":
          this.setState({
            myObj: new Sphere("sphere", 20.0, this.scene, new BABYLON.Vector3(0, 0, 0)),
          });
          break;
        case "plane":
          this.setState({
            myObj: new Plane("plane", 5.0, this.scene, new BABYLON.Vector3(0, 0, 0)),
          });
          break;
        // torusknot
        default:
          // TODO: alert
          break;
      }
    } else {
      // TODO: other object
      alert("Eloszor tavolitsa el a jelenlegi objektumot");
    }
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleColorChange = (color, event) => {
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
    //debugger;
    console.log(color.rgb);
    this.setState({ rgbColor: color.rgb });
    let pickedColor = new BABYLON.Color3(
      color.rgb.r / 255.0,
      color.rgb.g / 255.0,
      color.rgb.b / 255.0
    );
    this.state.myObj.setAmbientColor(pickedColor);
  };

  render() {
    return (
      <div className="App">
        <canvas id="rendercanvas" width="50%" height="100%" className="renderCanvas" />
        <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} >
          onPointerDown={() => {
            var materialBox = new BABYLON.StandardMaterial("texture1", this.m_Scene);
            //materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0); //Green
            materialBox.diffuseColor = new BABYLON.Color3(
              Math.random(),
              Math.random(),
              Math.random()
            );

            materialBox.ambientColor = new BABYLON.Color3(
              Math.random(),
              Math.random(),
              Math.random()
            );
            this.state.box1.material = materialBox;

            var sdjkfhsdf = new MyMaterial("asdghasd" + Math.random(), this.m_Scene);
            //var sdjkfhsdf = new BABYLON.StandardMaterial();
            sdjkfhsdf.diffuseColor = new BABYLON.Color3(
              Math.random(),
              Math.random(),
              Math.random()
            );
            debugger;
            var state = this.state;
            state.myObj.m_obj.material = sdjkfhsdf;
          }}>
          asdasdkjsdf
        </button>
          <div>
              <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} > onPointerDown={() => this.state.myObj.setMaterial(WIREFRAME)}>Wireframe</button>
              <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} >
                onPointerDown={() => {
                  console.log(this.state.myObj);
                  /*TODO ellenorzesek*/ this.state.myObj.setMaterial(DISABLE_LIGHTNING);
                }}>
                light
              </button>
              <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} > onPointerDown={() => this.state.myObj.setMaterial(POINTS_CLOUD)}>
                pointsCloud
              </button>
              <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} >
                onPointerDown={() => {
                  console.log(this.state.m_axisNeed);
                  this.setState(prevState => ({
                    m_axisNeed: !prevState.m_axisNeed,
                  }));
                }}>
                m_axisNeed
              </button>
              <ul id="materialList" />
              <div>
                <div className="materialProperitesStyle">
                  Material Properties
                </div>
                <div id="propname" />
              </div>
          <ImagePicker
            extensions={["jpg", "jpeg", "png"]}
            dims={{ minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500 }}
            onChange={base64 => console.log(base64)}
            onError={errMsg => console.log(errMsg)}>
            <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} >>Click to upload image</button>
          </ImagePicker>
          <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} > onPointerDown={() => this.remove()}>remove</button>
          <button style={{    backgroundColor: white,
    borderRadius: 4,
    textAlign: center,
    
  }} > onPointerDown={() => this.add()}>add</button>
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <Slider
            min={0.0}
            max={1.0}
            onChange={val => {
              console.log(val);

              this.state.myObj.setAlpha(val);
            }}
            title="Alpha"
          />
          <SketchPicker
            color={this.state.rgbColor}
            onChangeComplete={(color, event) => this.handleColorChange(color, event)}
            disableAlpha
          />
          <Collapsible trigger="Start here" triggerStyle={{ borderColor: "red", borderWidth: 2 }}>
            <p>
              This is the collapsible content. It can be any element or React component you like.
            </p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default App;
