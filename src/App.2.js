import React, { Component } from "react";
import "./App.css";
import * as BABYLON from "babylonjs";
import Slider from "./components/common/Slider";
import "babylonjs-loaders";
import { ImagePicker } from "react-file-picker";
import Select from "react-select";
import Collapsible from "react-collapsible";
import { options } from "./utilities/constants";
import "babylonjs-serializers";
import download from "downloadjs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MaterialItemUI from "./MaterialUI";
import "./App.css";
import Material from "../src/components/Material/Material";
import { MeshObject, MeshCreator } from "./App.2.Mesh";

// import {OBJExport} from "./export.ts"
import { exportObj } from "./export";

//TODO: remove material

var textures;
var dummyBool = false;

class App extends Component {
  state = {
    m_peldamesh: new MeshObject(),
    selectedOption: options[0],
    m_axisNeed: true,
    rgbColor: new BABYLON.Vector3(1, 0, 0),
    materials: [],
    currSubMat: null,
    m_newMaterialName: "",
    uploadedMeshes: [],
    isOwnMesh: false,
    light: false,
    materialDetails: ""
  };

  componentDidMount() {
    
    toast.configure(
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    }
    );
    this.m_Canvas = document.getElementById("rendercanvas");
    this.m_Canvas.height = window.innerHeight;
    this.m_Canvas.width = window.innerWidth / 2;
    this.m_Engine = new BABYLON.Engine(this.m_Canvas);
    this.m_Scene = this.createScene(this.m_Engine, this.m_Canvas);
    this.m_Scene.EnAssetManagerem = new BABYLON.AssetsManager(this.m_Scene);
    this.m_Scene.EnAssetManagerem.onFinish = this.onFinish;
    this.m_Scene.EnAssetManagerem.onTaskError = this.onTaskError;

    this.state.m_peldamesh.switchMesh(
      MeshCreator.CreateBox(this.m_Scene),
      this.m_Scene
    );

    setInterval(() => {
      this.m_Scene.render();
    }, 100);

    this.forceUpdate();
  }

  createScene(engine, canvas, scenecreatorfunc) {
    var scene = null;

    if (scenecreatorfunc == undefined) {
      scene = new BABYLON.Scene(engine);
    } else {
      this.m_Scene.dispose();
      scene = this.scenecreatorfunc();
    }

    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      -4,
      0.8,
      40,
      new BABYLON.Vector3.Zero(),
      scene
    );

    camera.attachControl(canvas, true);

    camera.onViewMatrixChangedObservable.add(() => {
      scene.render();
    });

    this.m_Scene = scene;
    return scene;
  }

  /*remove = () => {
    if (this.state.m_peldamesh != null) {
      this.state.m_peldamesh.remove();
      //   this.state.currSubMat.delete();
      this.setState({ m_peldamesh: null, currSubMat: null });
    } else {
      // TODO: alert
    }
  };*/

  handleSelectionChange = async selectedOption => {
    this.setState({ selectedOption }, () => {
      const { value, label } = this.state.selectedOption;
      if (this.state.isOwnMesh) {
        this.setState({ isOwnMesh: false });
        this.state.m_peldamesh.dispose();
        this.state.m_peldamesh = new MeshObject();
      }

      switch (value) {
        case "box":
          this.state.m_peldamesh = new MeshObject();
          this.state.m_peldamesh.switchMesh(
            MeshCreator.CreateBox(this.m_Scene),
            this.m_Scene
          );
          break;
        case "cylinder":
          this.state.m_peldamesh.switchMesh(
            MeshCreator.Create_Cylinder(this.m_Scene),
            this.m_Scene
          );
          break;
        case "torus":
          this.state.m_peldamesh.switchMesh(
            MeshCreator.CreateTorus("torus", 2.0, this.m_Scene),
            this.m_Scene
          );
          break;
        case "torusknot":
          this.state.m_peldamesh.switchMesh(
            MeshCreator.CreateTorusKnot(
              "torusknot",
              2.0,
              0.5,
              100.0,
              100.0,
              2.0,
              3.0,
              this.m_Scene
            ),
            this.m_Scene
          );
          break;
        case "polygon":
          this.state.m_peldamesh.switchMesh(
            MeshCreator.CreatePolygon("polygon", 2.0, this.m_Scene),
            this.m_Scene
          );
          break;
        case "sphere":
          this.state.m_peldamesh.switchMesh(
            MeshCreator.CreateSphere("sphere", 100.0, 10.0, this.m_Scene),
            this.m_Scene
          );
          break;
        case "NewMesh":
          {
            if (!this.state.isOwnMesh) 
            {
              this.state.m_peldamesh.remove();
            }
            this.uploadModel();
          }
          break;
        default: {
          alert("Varatlan hiba select!");
          break;
        }
      }
    });
  };

  setMaterialItem = name => {
    if (this.state.isOwnMesh == true) {
      for (
        var i = 0;
        i < this.state.m_peldamesh.material.subMaterials.length;
        i++
      ) {
        var submat = this.state.m_peldamesh.material.subMaterials[i];
        if (submat.name == name) {
          let tmp = this.state.m_peldamesh.material.subMaterials[0];
          this.state.m_peldamesh.material.subMaterials[0] = submat;
          this.state.m_peldamesh.material.subMaterials[i] = tmp;
          this.setState({ currSubMat: submat });
        }
      }
    } else {
      for (
        var i = 0;
        i < this.state.m_peldamesh.m_obj.material.subMaterials.length;
        i++
      ) {
        var submat = this.state.m_peldamesh.m_obj.material.subMaterials[i];
        if (submat.name == name) {
          this.setState({ currSubMat: submat });
          this.state.m_peldamesh.applynewMaterial(submat, i);
        }
      }
    }
  };

  addMaterial = () => {
    var sdasda = this.state;

    if (this.state.isOwnMesh == true) {
      let newMat = this.state.m_peldamesh.material.AddMaterial(
        this.state.m_newMaterialName,
        this.m_Scene
      );
      this.setState({ m_newMaterialName: "", currSubMat: newMat });
      this.forceUpdate();
      this.setMaterialItem(newMat.name);
    } else if (this.state.m_newMaterialName.length > 0) {
      let newMat = this.state.m_peldamesh.m_obj.material.AddMaterial(
        this.state.m_newMaterialName,
        this.m_Scene
      );
      this.setState({ m_newMaterialName: "", currSubMat: newMat });
      this.forceUpdate();
      this.setMaterialItem(newMat.name);
    } 
    else 
    {
      // alert("adjon meg nevet");
      toast("Add name to material!");
    }
  };

  removeMaterial = mat_name => {
    if (mat_name) {
      this.state.m_peldamesh.m_obj.material.RemoveMaterial(
        mat_name,
        this.m_Scene
      );
    } else {
      this.state.m_peldamesh.m_obj.material.RemoveMaterial("", this.m_Scene);
    }

    this.setState({ currSubMat: null });
    this.forceUpdate();
  };

  renderSelectedMaterial = () => {
    return this.state.currSubMat ? (
      <div>
        <div className="selectSelectedStyle">Selected material: </div>{" "}
        {this.state.currSubMat.name}
      </div>
    ) : (
      <div>
        <div className="selectSelectedStyle">Select material!</div>
      </div>
    );
  };

  renderListOfMaterials = () => {
    let materials;
    if (
      this.state.m_peldamesh &&
      (this.state.m_peldamesh.m_obj || this.state.isOwnMesh)
    ) {
      let tmpArr = this.state.isOwnMesh
        ? this.state.m_peldamesh.material.subMaterials
        : this.state.m_peldamesh.m_obj.material.subMaterials;
      materials = tmpArr.map(mat => {
        return (
          <li
            className="title"
            onClick={() => this.setMaterialItem(mat.name)}
            name={mat.name}
            key={mat.name}
            // onMouseOver={() => alert(mat.name)}
          >
            <div onDoubleClick={() => alert(mat.name)}>{mat.name}</div>
            <a
              className="deleteMat"
              href="#"
              onMouseDown={() => this.removeMaterial(mat.name)}
            >
              ✖
            </a>
          </li>
        );
      });
    }
    return materials;
  };

  renderMeshSelect = () => {
    var optionsvec = [...options];
    for (var i = 0; i < this.state.uploadedMeshes.length; i++) {
      optionsvec.push({
        value: "val//_" + this.state.uploadedMeshes[i].name,
        label: this.state.uploadedMeshes[i].name
      });
    }

    optionsvec.push({ value: "NewMesh", label: "Upload new mesh" });

    return (
      <div className="meshSelect">
        <div className="meshSelectStyle">
          <div>Select a Mesh</div>
        </div>
        <div className="meshSelectDropDownStyle">
          <Select
            value={this.state.selectedOption}
            onChange={this.handleSelectionChange}
            options={optionsvec}
          />
        </div>
      </div>
    );
  };

  renderTextures = () => {
    if (this.state.currSubMat) {
      textures = this.state.currSubMat.components.map(textureitem => {
        return (
          <div className="textureTitle" style={{ padding: "15px" }}>
            {textureitem}
            <img src={textureitem.url} width={"20"} height={"20"} />
            <a className="deleteTexture" href="" onMouseDown={() => {}}>
              ✖
            </a>
          </div>
        );
      });
    }
    return textures;
  };

  GetValue() {
    if (this.state.currSubMat) {
      return this.state.currSubMat.GetObjMatSpec();
    }

    return "No obj material";
  }

  uploadModel = () => {
    this.refs.fileUpload.click();
  };

  uploadModelFile = e => {
    console.log(e);

    if (!(e.target.files instanceof FileList)) {
      return;
    }

    var file = e.target.files[0];

    var reader = new FileReader();
    reader.onload = () => {
      var text = reader.result;

      try {
        let newmesh = BABYLON.SceneLoader.ImportMesh(
          "",
          "",
          "data:" + text,
          this.m_Scene,
          res => {
            res = res[0];
            var boundingInfo = res.getBoundingInfo();

            var centerje = boundingInfo.boundingBox.center;
            var size_x =
              Math.abs(boundingInfo.maximum.x) +
              Math.abs(boundingInfo.minimum.x);
            var size_y =
              Math.abs(boundingInfo.maximum.y) +
              Math.abs(boundingInfo.minimum.y);
            var size_z =
              Math.abs(boundingInfo.maximum.z) +
              Math.abs(boundingInfo.minimum.z);
            debugger;
            var maxxja = Math.max(size_x, size_y, size_z);
            var minje = Math.min(size_x, size_y, size_z);
            if (maxxja < 10.0) {
              var c = 10.0 / maxxja;
              res.scaling = new BABYLON.Vector3(c, c, c);
            }

            if (maxxja > 1000.0) {
              res.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
            }

            res.position = new BABYLON.Vector3(
              -centerje.x,
              -centerje.y,
              -centerje.z
            );
            res.material = new Material(this.m_Scene);
            res.material.CreateSubMaterial("default material", this.m_Scene);
            this.setState({
              m_peldamesh: res,
              isOwnMesh: true,
              currSubMat: res.material.subMaterials[0]
            });
          },
          res => {
            console.log("progress: ", res);
          },
          res => {
            alert("Varatlan hiba betoltes");
            console.log("err res: ", res);
          },
          ".obj"
        );

        console.log(newmesh);
      } catch (exp) {
        alert("error", JSON.stringify(exp));
        console.log("err: ", exp);
      }
    };
    reader.readAsText(file);
  };

  renderADsdasda = () => {
    var materials = this.renderListOfMaterials();
    return (
      <div>
        <ul id="materialList">{materials}</ul>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            ref="newMatRef"
            type="text"
            value={this.state.m_newMaterialName}
            placeholder="Enter your material name"
            maxLength={20}
            onChange={() =>this.setState({ m_newMaterialName: this.refs.newMatRef.value })}
            onKeyDown={
                e =>
                {
                  if (e.key === 'Enter') 
                  {
                    this.addMaterial()
                  }
                }
              }
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              style={{
                backgroundColor: "white",
                borderRadius: 4,
                textAlign: "center"
              }}
              ref="addMaterial"
              onMouseDown={() => this.addMaterial()}
            >
              Add material
            </button>
            <button
              style={{
                backgroundColor: "white",
                borderRadius: 4,
                textAlign: "center"
              }}
              onMouseDown={() => this.removeMaterial()}
            >
              Remove last material
            </button>
          </div>
        </div>
      </div>
    );
  };

  renderImagePicker = () => {
    return (
      <div style={{ display: "none" }}>
        <ImagePicker
          extensions={["jpg", "jpeg", "png"]}
          dims={{
            minWidth: 100,
            maxWidth: 500,
            minHeight: 100,
            maxHeight: 500
          }}
          onChange={base64 => console.log(base64)}
          onError={errMsg => console.log(errMsg)}
        >
          <button
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              textAlign: "center"
            }}
            ref={"ImagePickerRef"}
          >
            Click to add texture
          </button>
        </ImagePicker>
      </div>
    );
  };

  renderExport = () => {
    return (
      <button
        style={{
          backgroundColor: "white",
          borderRadius: 4,
          textAlign: "center",
          marginLeft: 30
        }}
        onPointerDown={() => {
          var mat = this.state.isOwnMesh
            ? this.state.m_peldamesh.material.subMaterials[0]
            : this.state.m_peldamesh.m_obj.material.subMaterials[0];
          var text = exportObj(mat);
          download(text, "material.mtl");
        }}
      >
        Export material
      </button>
    );
  };

  renderUploadModel = () => {
    return (
      <div>
        <button
          style={{
            backgroundColor: "white",
            borderRadius: 4,
            textAlign: "center"
          }}
          onPointerDown={() => {
            this.uploadModel();
          }}
        >
          upload model
        </button>
        <input
          type="file"
          style={{ display: "none" }}
          ref="fileUpload"
          onChange={this.uploadModelFile}
          accept=".babylon,.obj,.txt"
        />
      </div>
    );
  };

  renderPointsSizeSlider = () => {
    let sdasda =
      this.state.currSubMat && this.state.currSubMat.pointsCloud ? (
        <Slider
          min={0.0}
          max={100}
          value={this.state.currSubMat.pointSize}
          onChange={val => {
            this.state.currSubMat.setPointsSize(val);
          }}
          title="Points size"
        />
      ) : null;
    return (
      this.state.currSubMat && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {sdasda}
          <Slider
            min={0.0}
            max={1.0}
            value={this.state.currSubMat ? this.state.currSubMat.alpha : 1.0}
            onChange={val => {
              console.log(val);
              if (this.state.currSubMat) {
                console.log(this.state.currSubMat)
                this.state.currSubMat.setAlpha(val);
              }
            }}
            title="Alpha"
          />
        </div>
      )
    );
  };

  renderSlidersAndButtons = () => {
    if (this.state.currSubMat)
    {
      let lightText = !dummyBool ? "Disable light" : "Enable light";
      let wireText = this.state.currSubMat.wireframe ? "Set wireframe off" : "Set wireframe on";
      let pointsText = this.state.currSubMat.pointsCloud ? "Set pointscloud off" : "Set pointscloud on";
      return (
        this.state.currSubMat && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              style={{
                backgroundColor: "white",
                borderRadius: 4,

                textAlign: "center"
              }}
                onPointerDown={() => 
                  {
                    this.state.currSubMat.setWireframe()
                    this.forceUpdate()
                  }
              }
            >
              {wireText} 
            </button>
            <button
              style={{
                backgroundColor: "white",
                borderRadius: 4,
                textAlign: "center"
              }}
              onPointerDown={() => {
                this.state.currSubMat.setLight(dummyBool);
                dummyBool = !dummyBool;
                this.forceUpdate();
              }}
            >
              {lightText}
            </button>
            <button
              style={{
                backgroundColor: "white",
                borderRadius: 4,
                textAlign: "center"
              }}
              onPointerDown={() => {
                this.state.currSubMat.setPointsCloud();
                this.forceUpdate();
              }}
            >
              {pointsText}
            </button>

            {/* // {this.renderPointsSizeSlider()} */}
          </div>
        )
      );
    }
  };

  

  render() {
    // textures = this.renderTextures();
    
    return (
      <div className="App">
        {/* <canvas id="rendercanvas" width="50%" height="100%" className="renderCanvas" /> */}
        <div className="editorContainer">
          {this.renderMeshSelect()}
          <div className="uploadModelStyle" />
          <input
            type="file"
            style={{ display: "none" }}
            ref="fileUpload"
            onChange={this.uploadModelFile}
          />
          <div className="mSmPStyle">
            <div>
              {this.renderSelectedMaterial()}

              {this.renderADsdasda()}
              {/* {this.renderUploadModel()} */}
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", padding: 15 }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="materialPropertiesStyle">
                  Material Properties
                </div>
                {this.renderExport()}
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {this.renderImagePicker()}

                <div style={{ padding: 15 }}>
                  {this.renderSlidersAndButtons()}
                </div>
                <div style={{ padding: 15 }}>
                  {this.renderPointsSizeSlider()}
                </div>
              </div>
            </div>
          </div>
          <MaterialItemUI material={this.state.currSubMat} />
          {/* <div style={{ display: "flex", flexDirection: "column" }}> */}

          {/* </div> */}
        </div>
        <canvas
          id="rendercanvas"
          width="50%"
          height="100%"
          className="renderCanvas"
        />
      </div>
    );
  }
}

export default App;
