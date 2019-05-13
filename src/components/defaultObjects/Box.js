import BABYLON from "babylonjs";

import Material from "../Material/Material";
/*
var i = 0;
class MeshObject
{
  constructor(obj, scene, pos = new BABYLON.Vector3(0, 0, 0))
  {
    this.m_obj = obj;

    this.m_obj.position.x = pos.x;
    this.m_obj.position.y = pos.y;
    this.m_obj.position.z = pos.z;
  
    this.m_obj.material = new Material(scene);
    this.m_obj.material.CreateSubMaterial("default material", scene);
  }

  applynewMaterial = (material, index) => {
    // this.m_obj.material = index;
    // this.m_obj.material = this.m_obj.material[index];
    let tmp = this.m_obj.material.subMaterials[0];
    this.m_obj.material.subMaterials[0] = material;
    this.m_obj.material.subMaterials[index] = tmp;
  };

  getMaterial = () => {
    console.log(this.m_obj.material);
  };

  setMaterial = material => {
    console.log("setMat");
    this.m_obj.material.dispose(false, true);

    // this.m_obj.material = material;
  };

  remove = () => {
    this.m_obj.dispose();
    // this.m_obj.material.removeAllMaterial();
    // this.m_obj.material = null;
    this.m_obj = null;
  };
};*/

class MeshCreator
{
  constructor()
  {
  }

  static CreateOwnMesh(scene, name="nincsnev", size= new BABYLON.Vector3(8, 8, 8), pos = new BABYLON.Vector3(0, 0, 0))
  {
    return BABYLON.Mesh.CreateBox(name, size, scene);
  }

  static CreateBox(scene, name="nincsnev", size= new BABYLON.Vector3(8, 8, 8), pos = new BABYLON.Vector3(0, 0, 0))
  {
    return BABYLON.Mesh.CreateBox(name, size, scene);
  }

}

export { MeshCreator };
