export const exportObj = (material) =>
{
    var output = [];
    
    var m = material;
    output.push("newmtl mat1");
    output.push("  Ns " + m.specularPower.toFixed(4));
    output.push("  Ni 1.5000");
    output.push("  d " + m.alpha);
    output.push("  Tr 0.0000");
    output.push("  Tf 1.0000 1.0000 1.0000");
    output.push("  illum 2");
    output.push("  Ka " + m.ambientColor.r.toFixed(4) + " " + m.ambientColor.g.toFixed(4) + " " + m.ambientColor.b.toFixed(4));
    output.push("  Kd " + m.diffuseColor.r.toFixed(4) + " " + m.diffuseColor.g.toFixed(4) + " " + m.diffuseColor.b.toFixed(4));
    output.push("  Ks " + m.specularColor.r.toFixed(4) + " " + m.specularColor.g.toFixed(4) + " " + m.specularColor.b.toFixed(4));
    output.push("  Ke " + m.emissiveColor.r.toFixed(4) + " " + m.emissiveColor.g.toFixed(4) + " " + m.emissiveColor.b.toFixed(4));
    //TODO: uv scale, offset, wrap
    //TODO: UV mirrored in Blender? second UV channel? lightMap? reflection textures?
    var uvscale = "";
    if (m.ambientTexture) {
        output.push("  map_Ka " + uvscale + m.ambientTexture.name);
    }
    if (m.diffuseTexture) {
        output.push("  map_Kd " + uvscale + m.diffuseTexture.name);
        //TODO: alpha testing, opacity in diffuse texture alpha channel (diffuseTexture.hasAlpha -> map_d)
    }
    if (m.specularTexture) {
        output.push("  map_Ks " + uvscale + m.specularTexture.name);
        /* TODO: glossiness = specular highlight component is in alpha channel of specularTexture. (???)
        if (m.useGlossinessFromSpecularMapAlpha)  {
            output.push("  map_Ns "+uvscale + m.specularTexture.name);
        }
        */
    }
    /* TODO: emissive texture not in .MAT format (???)
    if (m.emissiveTexture) {
        output.push("  map_d "+uvscale+m.emissiveTexture.name);
    }
    */
    if (m.bumpTexture) {
        output.push("  map_bump -imfchan z " + uvscale + m.bumpTexture.name);
    }
    if (m.opacityTexture) {
        output.push("  map_d " + uvscale + m.opacityTexture.name);
    }
    var text = output.join("\n");
    return (text);
  
};