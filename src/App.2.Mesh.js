import BABYLON from "babylonjs";
import Material from "./components/Material/Material";

export class MeshObject
{
  constructor()
  {
    this.m_obj = null;
  }

  switchMesh(babMesh, scene)
  {
	  if (this.m_obj)
	  {
		  this.m_obj.dispose();
	  }
	
    var material = null;
    if (this.m_obj && this.m_obj.material != null)
    {
      material = this.m_obj.material;
    }
    else
    {
      material = new Material(scene);
      material.CreateSubMaterial("default material", scene);
    }
      
    this.m_obj = babMesh;
	  this.m_obj.material = material;
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

  remove = () => 
  {
    if (this.m_obj)
    {
      this.m_obj.dispose();
      this.m_obj = null;
    }
    // this.m_obj.material.removeAllMaterial();
    // this.m_obj.material = null;
  };
};

export class MeshCreator
{
  constructor()
  {
  }

  static CreateOwnMesh(scene, name="nincsnev", size= new BABYLON.Vector3(8, 8, 8), pos = new BABYLON.Vector3(0, 0, 0))
  {
    return BABYLON.Mesh.CreateBox(name, size, scene);
  }

  static CreateBox(scene, name="nincsnev", size=8, pos = new BABYLON.Vector3(0, 0, 0))
  {
    return BABYLON.Mesh.CreateBox(name, size, scene);
  }

  static Create_Cylinder(scene, name="nincsnev", size= new BABYLON.Vector3(8, 8, 8), pos = new BABYLON.Vector3(0, 0, 0), height=7.0, diameterTop=4.0, diameterBottom=8.0, tessellation=100.0)
  {
	  return BABYLON.Mesh.CreateCylinder(name, height, diameterTop, diameterBottom, tessellation, scene);
  }

  static CreateTorus(name, thickness, scene)
  {
    return BABYLON.Mesh.CreateTorus(name, 10, thickness, 100, scene);
  }

  static CreateTorusKnot(name, radius, tube, radialSegments, tubularSegments, p, q, scene)
  {
    return BABYLON.Mesh.CreateTorusKnot(name, radius, tube, radialSegments, tubularSegments, p, q, scene, true, 3);
  }

  static CreatePolygon(name, tessellation, scene)
  {
    return BABYLON.Mesh.CreateDisc(name, tessellation, scene);
  }

  static CreateSphere(name, segments, diameter, scene)
  {
    return BABYLON.Mesh.CreateSphere(name, segments, diameter, scene);
  }
}

