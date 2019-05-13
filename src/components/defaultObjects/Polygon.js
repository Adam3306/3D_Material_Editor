import BABYLON from "babylonjs";

import Material from "../Material/Material";

class Polygon {
  constructor(name, tessellation, scene, pos = new BABYLON.Vector3(0, 0, 0)) {
    console.log("Polygon ctor");

    this.m_obj = BABYLON.Mesh.CreateDisc(name, tessellation, scene);
    // (name, size, 100, 10, 10, 5, scene);

    this.m_obj.position.x = pos.x;
    this.m_obj.position.y = pos.y;
    this.m_obj.position.z = pos.z;
    // this.box.scaling.x = 5;

    this.m_obj.material = new Material(name, scene);
    this.m_obj.material.CreateSubMaterial("default material", scene);
  }

  remove = () => {
    this.m_obj.dispose();
    this.m_obj = null;
  };
}

export { Polygon };
