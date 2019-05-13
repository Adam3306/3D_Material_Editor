import React, { Component } from "react";
import "./App.css";
import BABYLON from "babylonjs";

class App extends Component {
  state = {};

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
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);
    // light.specular = new BABYLON.Color3(0, 1, 0);
    // light.groundColor = new BABYLON.Color3(0, 1, 0);
    BABYLON.MeshBuilder.CreateGround("gd", { width: 6, subdivisions: 4 }, scene);
    // var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0.8,
      10,
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
    this.state.box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);

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
            this.state.box1.material = materialBox;
          }}>
          asdasdkjsdf
        </button>
      </div>
    );
  }
}

export default App;
