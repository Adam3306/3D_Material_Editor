import BABYLON from "babylonjs";

import Material from "../Material/Material";

class Sphere {
  constructor(name, segments, diameter, scene, pos = new BABYLON.Vector3(0, 0, 0)) {
    console.log("Sphere ctor");

    this.m_obj = BABYLON.Mesh.CreateSphere(name, segments, diameter, scene);
    // (name, size, 100, 10, 10, 5, scene);

    this.m_obj.position.x = pos.x;
    this.m_obj.position.y = pos.y;
    this.m_obj.position.z = pos.z;
    // this.box.scaling.x = 5;
    this.m_obj.material = new Material(scene);
    this.m_obj.material.CreateSubMaterial("default material", scene);
  }

  remove = () => {
    this.m_obj.dispose();
    this.m_obj = null;
  };

  serialize = (r, i) => {
    /*if (null == i || null == r) return null;
    var o = {};
    o.id = i.id;
      i.name == i.id || isNullOrEmpty(i.name) || (o.name = i.name),
      i.diffuseColor.equalsFloats(1, 1, 1) || (o.diffuse = t.io.serializeColor3(i.diffuseColor)),
      i.specularColor.equalsFloats(0, 0, 0) || (o.specular = t.io.serializeColor3(i.specularColor)),
      i.emissiveColor.equalsFloats(0, 0, 0) || (o.emissive = t.io.serializeColor3(i.emissiveColor)),
      e.utils.math.eq(i.specularPower, 30) || (o.shininess = i.specularPower),
      e.utils.math.eq(i.reflectivity, 0) || (o.reflectivity = i.reflectivity),
      e.utils.math.eq(i.alpha, 1) || (o.alpha = i.alpha);
    var s = n.Texture.serialize(r, i.diffuseTexture);
    null != s && (o.diffuseTexture = s);
    var a = n.Texture.serialize(r, i.bumpTexture);
    return null != a && (o.bumpTexture = a), o;*/
  };
}

export { Sphere };
