import BABYLON from "babylonjs";
import React from "react";
import "./Material.css";

var textures = [
  "diffuseTexture",
  "reflectionTexture",
  "opacityTexture",
  "lightmapTexture",
  "emissiveTexture",
  "ambientTexture",
  "bumpTexture"
];

class MaterialItem extends BABYLON.StandardMaterial {
  constructor(name, scene) {
    super(name, scene);

    console.log("idaig", name, scene);
    this.light1 = new BABYLON.DirectionalLight(
      "DirectionalLight",
      new BABYLON.Vector3(1, 1, 1),
      scene
    );

    this.light2 = new BABYLON.DirectionalLight(
      "DirectionalLight",
      new BABYLON.Vector3(-1, -1, -1),
      scene
    );
    this.m_scene = scene;
    this.components = [];
  }

  setAlpha = value => {
    // console.log("setAlpha ", value);
    this.alpha = value;
  };

  setDiffuseColor = color => {
    // console.log("setDiffuseColor ", color, this.diffuseColor);
    this.diffuseColor = color;
  };

  setSpecularColor = color => {
    this.specularColor = color;
  };

  setEmissiveColor = color => {
    this.emissiveColor = color;
  };

  setWireframe = () => {
    this.wireframe = !this.wireframe;
  };

  setPointsCloud = () => {
    this.pointsCloud = !this.pointsCloud;
  };

  setPointsSize = size => {
    // console.log("setpointsize: ", size, " ", this.pointSize);
    this.pointSize = size;
  };

  setLight = val => {
    this.light1.setEnabled(val);
    this.light2.setEnabled(val);
  };

  AddNewTexture = textureKind => {
    //    Creation of a repeated textured material

    // this.reflectionTexture= text;
    // this.opacityTexture = text;
    // this.lightmapTexture = text;
    // this.emissiveTexture = text;
    // this.ambientTexture = text;
    // this.bumpTexture = text;
    if (this[textureKind] == null) {
      let text = new BABYLON.Texture(
        "textures/" + textureKind + ".jpg",
        this.m_scene
      );
      this[textureKind] = text;
    }

    // this.projectionTexture = text;
    // this.backFaceCulling = true;
  };

  removeTexture = texture => {
    let index;
    for (let i = 0; i < this.textures.length; i++) {
      if (textures[i] == texture) {
        index = i;
        break;
      }
    }
  };

  GetAvailableTextures() {
    var ret = [];
    for (let textureitem of textures) {
      if (this[textureitem] == null)
        ret.push({ value: textureitem, label: textureitem });
    }

    return ret;
  }

  GetObjMatSpec() {
    return (
      "newmtl my_mtl" +
      "\r\nKa 0.0435 0.0435 0.0435" +
      "\r\nKd 0.1086 0.1086 0.1086" +
      "\r\nKs 0.0000 0.0000 0.0000" +
      "\r\nTf 0.9885 0.9885 0.9885" +
      "\r\nillum 6" +
      "\r\nd -halo 0.6600" +
      "\r\nNs 10.0000" +
      "\r\nsharpness 60" +
      "\r\n Ni 1.19713"
    );
  }
}

class Material extends BABYLON.MultiMaterial {
  constructor(scene) {
    super("multimat", scene);
  }

  CreateSubMaterial = (matitem_name, scene) => {
    var mat = new MaterialItem(matitem_name, scene);
    this.subMaterials.push(mat);
  };

  AddMaterial = (matitem_name, scene) => {
    //  ellenorzes, hogy ne legyen ketto azonos nevu
    for (let i = 0; i < this.subMaterials.length; i++) {
      if (this.subMaterials[i].name == matitem_name) {
        alert("van mar ilyen nevu");
        return;
      }
    }

    let newMat = new MaterialItem(matitem_name, scene);
    this.subMaterials.push(newMat);
    return newMat;
  };

  RemoveMaterial = matitem_name => {
    if (matitem_name.length > 0) {
      let index;
      for (let i = 0; i < this.subMaterials.length; i++) {
        if (this.subMaterials[i].name == matitem_name) {
          index = i;
          break;
        }
      }
      this.subMaterials.splice(index, 1);
    } else {
      this.subMaterials.pop();
    }
  };

  removeAllMaterial = () => {
    for (let i = 0; i < this.subMaterials.length; i++) {
      this.subMaterials.pop();
    }
  };
}
export default Material;
