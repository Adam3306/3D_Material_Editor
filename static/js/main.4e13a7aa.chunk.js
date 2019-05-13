(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a(297)},115:function(e,t,a){},117:function(e,t,a){},296:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(14),i=a.n(l),s=(a(115),a(109)),o=a(63),u=a.n(o),c=a(102),m=a(9),d=a(12),h=a(16),p=a(15),f=a(17),b=(a(44),a(3)),v=a.n(b),g=(a(117),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).onChange=function(){a.setState({value:a.refs.slider.value}),a.props.onChange(a.refs.slider.value)},a.onInputChange=function(){a.setState({value:a.refs.textbox.value}),a.props.onChange(a.refs.slider.value)},a.state={value:e.value},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"slidecontainer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},n.a.createElement("p",{style:{fontSize:12}},this.props.title),n.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onInputChange,ref:"textbox",size:this.props.size,height:3,max:this.props.max,step:"0.0001",style:{width:50}})),n.a.createElement("input",{ref:"slider",type:"range",min:this.props.min,max:this.props.max,value:this.state.value,class:"slider",id:"myRange",step:"0.0001",onChange:this.onChange,style:{height:8}})))}}]),t}(n.a.Component));g.defaultProps={value:0,min:0,max:100,size:4,title:"Title"};var M,C=g,S=(a(118),a(103)),x=a(41),w=(a(119),[{value:"box",label:"Box"},{value:"cylinder",label:"Cylinder"},{value:"torus",label:"Torus"},{value:"torusknot",label:"Torusknot"},{value:"polygon",label:"Polygon"},{value:"sphere",label:"Sphere"}]),y=(a(122),a(104)),_=a.n(y),E=a(64),k=(a(124),a(42)),j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleColorChange=function(e,t,r){if(a.props.material){console.log(e.rgb);var n=new v.a.Color3(e.rgb.r/255,e.rgb.g/255,e.rgb.b/255);"ambientColor"===r?(a.props.material.setSpecularColor(n),a.setState({ambientColor:e.rgb})):"diffuseColor"===r?(a.props.material.setDiffuseColor(n),a.setState({diffuseColor:e.rgb})):(a.setState({color:e.rgb}),a.props.material.setEmissiveColor(n))}},a.handleTextureSelectorChange=function(e){a.setState({selectedTexture:e,textureMenuIsOpen:!1}),a.props.material.AddNewTexture(e.value)},a.OnAddNewtexture=function(){var e=a.props.material.GetAvailableTextures();a.setState({textureOptions:e,textureMenuIsOpen:!0})},a.renderTextures=function(){return a.props.material.getActiveTextures().map(function(e){var t=e.name.replace("textures/","").replace(".jpg","");return n.a.createElement("div",{className:"textureTitle",style:{padding:"15px"},key:e},t,n.a.createElement("img",{src:e.url,width:"20",height:"20",style:{marginLeft:15},alt:e.name}),n.a.createElement("a",{className:"deleteTexture",href:"#",onMouseUp:function(){a.props.material[t]=null,a.forceUpdate(),console.log(a.props.material.getActiveTextures())}},"\u2716"))})},a.state={color:a.props.material?a.props.material.specularColor:v.a.Vector3(1,0,1),ambientColor:a.props.material?a.props.material.diffuseColor:v.a.Vector3(1,0,1),diffuseColor:a.props.material?a.props.material.emissiveColor:v.a.Vector3(1,0,1),textureOptions:[],selectedTexture:null,textureMenuIsOpen:!1,light:!1},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.material?n.a.createElement("div",null,n.a.createElement("div",{className:"mSmPStyle"},n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("div",{className:"colorPickerContainer"},n.a.createElement("div",{className:"Colors"},n.a.createElement("div",{stlye:{padding:"10px"}},"Diffuse color")),n.a.createElement(k.SketchPicker,{color:this.state.ambientColor,onChangeComplete:function(t,a){return e.handleColorChange(t,a,"ambientColor")},disableAlpha:!0})),n.a.createElement("div",{className:"colorPickerContainer"},n.a.createElement("div",{className:"Colors"},n.a.createElement("div",{stlye:{padding:"10px"}},"Emissive color")),n.a.createElement(k.SketchPicker,{color:this.state.diffuseColor,onChangeComplete:function(t,a){return e.handleColorChange(t,a,"diffuseColor")},disableAlpha:!0})),n.a.createElement("div",{className:"colorPickerContainer"},n.a.createElement("div",{className:"Colors"},n.a.createElement("div",{stlye:{padding:"10px"}},"Specular color")),n.a.createElement(k.SketchPicker,{color:this.state.color,onChangeComplete:function(t,a){return e.handleColorChange(t,a,"color")},disableAlpha:!0})))),n.a.createElement("div",null,n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center"},onClick:this.OnAddNewtexture},"Click to add texture"),n.a.createElement(x.a,{onChange:this.handleTextureSelectorChange,options:this.state.textureOptions,ref:"textureSelect",menuIsOpen:this.state.textureMenuIsOpen}),this.renderTextures())):null}}]),t}(n.a.PureComponent),O=(a(296),["diffuseTexture","reflectionTexture","opacityTexture","lightmapTexture","emissiveTexture","ambientTexture","bumpTexture"]),T=function(e){function t(e,a){var r;return Object(m.a)(this,t),(r=Object(h.a)(this,Object(p.a)(t).call(this,e,a))).setAlpha=function(e){r.alpha=e},r.setDiffuseColor=function(e){r.diffuseColor=e},r.setSpecularColor=function(e){r.specularColor=e},r.setEmissiveColor=function(e){r.emissiveColor=e},r.setWireframe=function(){r.wireframe=!r.wireframe},r.setPointsCloud=function(){r.pointsCloud=!r.pointsCloud},r.setPointsSize=function(e){r.pointSize=e},r.setLight=function(e){r.light1.setEnabled(e),r.light2.setEnabled(e)},r.AddNewTexture=function(e){if(null==r[e]){var t=new v.a.Texture("textures/"+e+".jpg",r.m_scene);r[e]=t}},r.removeTexture=function(e){for(var t=0;t<r.textures.length;t++)if(O[t]==e){t;break}},console.log("idaig",e,a),r.light1=new v.a.DirectionalLight("DirectionalLight",new v.a.Vector3(1,1,1),a),r.light2=new v.a.DirectionalLight("DirectionalLight",new v.a.Vector3(-1,-1,-1),a),r.m_scene=a,r.components=[],r}return Object(f.a)(t,e),Object(d.a)(t,[{key:"GetAvailableTextures",value:function(){for(var e=[],t=0,a=O;t<a.length;t++){var r=a[t];null==this[r]&&e.push({value:r,label:r})}return e}},{key:"GetObjMatSpec",value:function(){return"newmtl my_mtl\r\nKa 0.0435 0.0435 0.0435\r\nKd 0.1086 0.1086 0.1086\r\nKs 0.0000 0.0000 0.0000\r\nTf 0.9885 0.9885 0.9885\r\nillum 6\r\nd -halo 0.6600\r\nNs 10.0000\r\nsharpness 60\r\n Ni 1.19713"}}]),t}(v.a.StandardMaterial),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,"multimat",e))).CreateSubMaterial=function(e,t){var r=new T(e,t);a.subMaterials.push(r)},a.AddMaterial=function(e,t){for(var r=0;r<a.subMaterials.length;r++)if(a.subMaterials[r].name==e)return void alert("van mar ilyen nevu");var n=new T(e,t);return a.subMaterials.push(n),n},a.RemoveMaterial=function(e){if(e.length>0){for(var t,r=0;r<a.subMaterials.length;r++)if(a.subMaterials[r].name==e){t=r;break}a.subMaterials.splice(t,1)}else a.subMaterials.pop()},a.removeAllMaterial=function(){for(var e=0;e<a.subMaterials.length;e++)a.subMaterials.pop()},a}return Object(f.a)(t,e),t}(v.a.MultiMaterial),A=function(){function e(){var t=this;Object(m.a)(this,e),this.applynewMaterial=function(e,a){var r=t.m_obj.material.subMaterials[0];t.m_obj.material.subMaterials[0]=e,t.m_obj.material.subMaterials[a]=r},this.getMaterial=function(){console.log(t.m_obj.material)},this.setMaterial=function(e){console.log("setMat"),t.m_obj.material.dispose(!1,!0)},this.remove=function(){t.m_obj&&(t.m_obj.dispose(),t.m_obj=null)},this.m_obj=null}return Object(d.a)(e,[{key:"switchMesh",value:function(e,t){this.m_obj&&this.m_obj.dispose();var a=null;this.m_obj&&null!=this.m_obj.material?a=this.m_obj.material:(a=new N(t)).CreateSubMaterial("default material",t),this.m_obj=e,this.m_obj.material=a}}]),e}(),D=function(){function e(){Object(m.a)(this,e)}return Object(d.a)(e,null,[{key:"CreateOwnMesh",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nincsnev",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new v.a.Vector3(8,8,8);arguments.length>3&&void 0!==arguments[3]?arguments[3]:new v.a.Vector3(0,0,0);return v.a.Mesh.CreateBox(t,a,e)}},{key:"CreateBox",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nincsnev",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8;arguments.length>3&&void 0!==arguments[3]?arguments[3]:new v.a.Vector3(0,0,0);return v.a.Mesh.CreateBox(t,a,e)}},{key:"Create_Cylinder",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nincsnev",a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:new v.a.Vector3(8,8,8),arguments.length>3&&void 0!==arguments[3]?arguments[3]:new v.a.Vector3(0,0,0),arguments.length>4&&void 0!==arguments[4]?arguments[4]:7),r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:4,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:8,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:100;return v.a.Mesh.CreateCylinder(t,a,r,n,l,e)}},{key:"CreateTorus",value:function(e,t,a){return v.a.Mesh.CreateTorus(e,10,t,100,a)}},{key:"CreateTorusKnot",value:function(e,t,a,r,n,l,i,s){return v.a.Mesh.CreateTorusKnot(e,t,a,r,n,l,i,s,!0,3)}},{key:"CreatePolygon",value:function(e,t,a){return v.a.Mesh.CreateDisc(e,t,a)}},{key:"CreateSphere",value:function(e,t,a,r){return v.a.Mesh.CreateSphere(e,t,a,r)}}]),e}(),P=function(e){var t=[],a=e;t.push("newmtl mat1"),t.push("  Ns "+a.specularPower.toFixed(4)),t.push("  Ni 1.5000"),t.push("  d "+a.alpha),t.push("  Tr 0.0000"),t.push("  Tf 1.0000 1.0000 1.0000"),t.push("  illum 2"),t.push("  Ka "+a.ambientColor.r.toFixed(4)+" "+a.ambientColor.g.toFixed(4)+" "+a.ambientColor.b.toFixed(4)),t.push("  Kd "+a.diffuseColor.r.toFixed(4)+" "+a.diffuseColor.g.toFixed(4)+" "+a.diffuseColor.b.toFixed(4)),t.push("  Ks "+a.specularColor.r.toFixed(4)+" "+a.specularColor.g.toFixed(4)+" "+a.specularColor.b.toFixed(4)),t.push("  Ke "+a.emissiveColor.r.toFixed(4)+" "+a.emissiveColor.g.toFixed(4)+" "+a.emissiveColor.b.toFixed(4));return a.ambientTexture&&t.push("  map_Ka "+a.ambientTexture.name),a.diffuseTexture&&t.push("  map_Kd "+a.diffuseTexture.name),a.specularTexture&&t.push("  map_Ks "+a.specularTexture.name),a.bumpTexture&&t.push("  map_bump -imfchan z "+a.bumpTexture.name),a.opacityTexture&&t.push("  map_d "+a.opacityTexture.name),t.join("\n")},F=!1,I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={m_peldamesh:new A,selectedOption:w[0],m_axisNeed:!0,rgbColor:new b.Vector3(1,0,0),materials:[],currSubMat:null,m_newMaterialName:"",uploadedMeshes:[],isOwnMesh:!1,light:!1,materialDetails:""},a.handleSelectionChange=function(){var e=Object(c.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({selectedOption:t},function(){var e=a.state.selectedOption,t=e.value;e.label;switch(a.state.isOwnMesh&&(a.setState({isOwnMesh:!1}),a.state.m_peldamesh.dispose(),a.state.m_peldamesh=new A),t){case"box":a.state.m_peldamesh=new A,a.state.m_peldamesh.switchMesh(D.CreateBox(a.m_Scene),a.m_Scene);break;case"cylinder":a.state.m_peldamesh.switchMesh(D.Create_Cylinder(a.m_Scene),a.m_Scene);break;case"torus":a.state.m_peldamesh.switchMesh(D.CreateTorus("torus",2,a.m_Scene),a.m_Scene);break;case"torusknot":a.state.m_peldamesh.switchMesh(D.CreateTorusKnot("torusknot",2,.5,100,100,2,3,a.m_Scene),a.m_Scene);break;case"polygon":a.state.m_peldamesh.switchMesh(D.CreatePolygon("polygon",2,a.m_Scene),a.m_Scene);break;case"sphere":a.state.m_peldamesh.switchMesh(D.CreateSphere("sphere",100,10,a.m_Scene),a.m_Scene);break;case"NewMesh":a.state.isOwnMesh||a.state.m_peldamesh.remove(),a.uploadModel();break;default:alert("Varatlan hiba select!")}});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.setMaterialItem=function(e){if(1==a.state.isOwnMesh)for(var t=0;t<a.state.m_peldamesh.material.subMaterials.length;t++){if((n=a.state.m_peldamesh.material.subMaterials[t]).name==e){var r=a.state.m_peldamesh.material.subMaterials[0];a.state.m_peldamesh.material.subMaterials[0]=n,a.state.m_peldamesh.material.subMaterials[t]=r,a.setState({currSubMat:n})}}else for(t=0;t<a.state.m_peldamesh.m_obj.material.subMaterials.length;t++){var n;(n=a.state.m_peldamesh.m_obj.material.subMaterials[t]).name==e&&(a.setState({currSubMat:n}),a.state.m_peldamesh.applynewMaterial(n,t))}},a.addMaterial=function(){a.state;if(1==a.state.isOwnMesh){var e=a.state.m_peldamesh.material.AddMaterial(a.state.m_newMaterialName,a.m_Scene);a.setState({m_newMaterialName:"",currSubMat:e}),a.forceUpdate(),a.setMaterialItem(e.name)}else if(a.state.m_newMaterialName.length>0){var t=a.state.m_peldamesh.m_obj.material.AddMaterial(a.state.m_newMaterialName,a.m_Scene);a.setState({m_newMaterialName:"",currSubMat:t}),a.forceUpdate(),a.setMaterialItem(t.name)}else Object(E.a)("Add name to material!")},a.removeMaterial=function(e){e?a.state.m_peldamesh.m_obj.material.RemoveMaterial(e,a.m_Scene):a.state.m_peldamesh.m_obj.material.RemoveMaterial("",a.m_Scene),a.setState({currSubMat:null}),a.forceUpdate()},a.renderSelectedMaterial=function(){return a.state.currSubMat?n.a.createElement("div",null,n.a.createElement("div",{className:"selectSelectedStyle"},"Selected material: ")," ",a.state.currSubMat.name):n.a.createElement("div",null,n.a.createElement("div",{className:"selectSelectedStyle"},"Select material!"))},a.renderListOfMaterials=function(){var e;a.state.m_peldamesh&&(a.state.m_peldamesh.m_obj||a.state.isOwnMesh)&&(e=(a.state.isOwnMesh?a.state.m_peldamesh.material.subMaterials:a.state.m_peldamesh.m_obj.material.subMaterials).map(function(e){return n.a.createElement("li",{className:"title",onClick:function(){return a.setMaterialItem(e.name)},name:e.name,key:e.name},n.a.createElement("div",{onDoubleClick:function(){return alert(e.name)}},e.name),n.a.createElement("a",{className:"deleteMat",href:"#",onMouseDown:function(){return a.removeMaterial(e.name)}},"\u2716"))}));return e},a.renderMeshSelect=function(){for(var e=Object(s.a)(w),t=0;t<a.state.uploadedMeshes.length;t++)e.push({value:"val//_"+a.state.uploadedMeshes[t].name,label:a.state.uploadedMeshes[t].name});return e.push({value:"NewMesh",label:"Upload new mesh"}),n.a.createElement("div",{className:"meshSelect"},n.a.createElement("div",{className:"meshSelectStyle"},n.a.createElement("div",null,"Select a Mesh")),n.a.createElement("div",{className:"meshSelectDropDownStyle"},n.a.createElement(x.a,{value:a.state.selectedOption,onChange:a.handleSelectionChange,options:e})))},a.renderTextures=function(){return a.state.currSubMat&&(M=a.state.currSubMat.components.map(function(e){return n.a.createElement("div",{className:"textureTitle",style:{padding:"15px"}},e,n.a.createElement("img",{src:e.url,width:"20",height:"20"}),n.a.createElement("a",{className:"deleteTexture",href:"",onMouseDown:function(){}},"\u2716"))})),M},a.uploadModel=function(){a.refs.fileUpload.click()},a.uploadModelFile=function(e){if(console.log(e),e.target.files instanceof FileList){var t=e.target.files[0],r=new FileReader;r.onload=function(){var e=r.result;try{var t=b.SceneLoader.ImportMesh("","","data:"+e,a.m_Scene,function(e){var t=(e=e[0]).getBoundingInfo(),r=t.boundingBox.center,n=Math.abs(t.maximum.x)+Math.abs(t.minimum.x),l=Math.abs(t.maximum.y)+Math.abs(t.minimum.y),i=Math.abs(t.maximum.z)+Math.abs(t.minimum.z),s=Math.max(n,l,i);Math.min(n,l,i);if(s<10){var o=10/s;e.scaling=new b.Vector3(o,o,o)}s>1e3&&(e.scaling=new b.Vector3(.5,.5,.5)),e.position=new b.Vector3(-r.x,-r.y,-r.z),e.material=new N(a.m_Scene),e.material.CreateSubMaterial("default material",a.m_Scene),a.setState({m_peldamesh:e,isOwnMesh:!0,currSubMat:e.material.subMaterials[0]})},function(e){console.log("progress: ",e)},function(e){alert("Varatlan hiba betoltes"),console.log("err res: ",e)},".obj");console.log(t)}catch(n){alert("error",JSON.stringify(n)),console.log("err: ",n)}},r.readAsText(t)}},a.renderADsdasda=function(){var e=a.renderListOfMaterials();return n.a.createElement("div",null,n.a.createElement("ul",{id:"materialList"},e),n.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},n.a.createElement("input",{ref:"newMatRef",type:"text",value:a.state.m_newMaterialName,placeholder:"Enter your material name",maxLength:20,onChange:function(){return a.setState({m_newMaterialName:a.refs.newMatRef.value})},onKeyDown:function(e){"Enter"===e.key&&a.addMaterial()}}),n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center"},ref:"addMaterial",onMouseDown:function(){return a.addMaterial()}},"Add material"),n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center"},onMouseDown:function(){return a.removeMaterial()}},"Remove last material"))))},a.renderImagePicker=function(){return n.a.createElement("div",{style:{display:"none"}},n.a.createElement(S.ImagePicker,{extensions:["jpg","jpeg","png"],dims:{minWidth:100,maxWidth:500,minHeight:100,maxHeight:500},onChange:function(e){return console.log(e)},onError:function(e){return console.log(e)}},n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center"},ref:"ImagePickerRef"},"Click to add texture")))},a.renderExport=function(){return n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center",marginLeft:30},onPointerDown:function(){var e=a.state.isOwnMesh?a.state.m_peldamesh.material.subMaterials[0]:a.state.m_peldamesh.m_obj.material.subMaterials[0],t=P(e);_()(t,"material.mtl")}},"Export material")},a.renderUploadModel=function(){return n.a.createElement("div",null,n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center"},onPointerDown:function(){a.uploadModel()}},"upload model"),n.a.createElement("input",{type:"file",style:{display:"none"},ref:"fileUpload",onChange:a.uploadModelFile,accept:".babylon,.obj,.txt"}))},a.renderPointsSizeSlider=function(){var e=a.state.currSubMat&&a.state.currSubMat.pointsCloud?n.a.createElement(C,{min:0,max:100,value:a.state.currSubMat.pointSize,onChange:function(e){a.state.currSubMat.setPointsSize(e)},title:"Points size"}):null;return a.state.currSubMat&&n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e,n.a.createElement(C,{min:0,max:1,value:a.state.currSubMat?a.state.currSubMat.alpha:1,onChange:function(e){console.log(e),a.state.currSubMat&&(console.log(a.state.currSubMat),a.state.currSubMat.setAlpha(e))},title:"Alpha"}))},a.renderSlidersAndButtons=function(){if(a.state.currSubMat){var e=F?"Enable light":"Disable light",t=a.state.currSubMat.wireframe?"Set wireframe off":"Set wireframe on",r=a.state.currSubMat.pointsCloud?"Set pointscloud off":"Set pointscloud on";return a.state.currSubMat&&n.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center"},onPointerDown:function(){a.state.currSubMat.setWireframe(),a.forceUpdate()}},t),n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center"},onPointerDown:function(){a.state.currSubMat.setLight(F),F=!F,a.forceUpdate()}},e),n.a.createElement("button",{style:{backgroundColor:"white",borderRadius:4,textAlign:"center"},onPointerDown:function(){a.state.currSubMat.setPointsCloud(),a.forceUpdate()}},r))}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.configure({position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),this.m_Canvas=document.getElementById("rendercanvas"),this.m_Canvas.height=window.innerHeight,this.m_Canvas.width=window.innerWidth/2,this.m_Engine=new b.Engine(this.m_Canvas),this.m_Scene=this.createScene(this.m_Engine,this.m_Canvas),this.m_Scene.EnAssetManagerem=new b.AssetsManager(this.m_Scene),this.m_Scene.EnAssetManagerem.onFinish=this.onFinish,this.m_Scene.EnAssetManagerem.onTaskError=this.onTaskError,this.state.m_peldamesh.switchMesh(D.CreateBox(this.m_Scene),this.m_Scene),setInterval(function(){e.m_Scene.render()},100),this.forceUpdate()}},{key:"createScene",value:function(e,t,a){var r=null;void 0==a?r=new b.Scene(e):(this.m_Scene.dispose(),r=this.scenecreatorfunc());var n=new b.ArcRotateCamera("Camera",-4,.8,40,new b.Vector3.Zero,r);return n.attachControl(t,!0),n.onViewMatrixChangedObservable.add(function(){r.render()}),this.m_Scene=r,r}},{key:"GetValue",value:function(){return this.state.currSubMat?this.state.currSubMat.GetObjMatSpec():"No obj material"}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"editorContainer"},this.renderMeshSelect(),n.a.createElement("div",{className:"uploadModelStyle"}),n.a.createElement("input",{type:"file",style:{display:"none"},ref:"fileUpload",onChange:this.uploadModelFile}),n.a.createElement("div",{className:"mSmPStyle"},n.a.createElement("div",null,this.renderSelectedMaterial(),this.renderADsdasda()),n.a.createElement("div",{style:{display:"flex",flexDirection:"column",padding:15}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("div",{className:"materialPropertiesStyle"},"Material Properties"),this.renderExport()),n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},this.renderImagePicker(),n.a.createElement("div",{style:{padding:15}},this.renderSlidersAndButtons()),n.a.createElement("div",{style:{padding:15}},this.renderPointsSizeSlider())))),n.a.createElement(j,{material:this.state.currSubMat})),n.a.createElement("canvas",{id:"rendercanvas",width:"50%",height:"100%",className:"renderCanvas"}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.4e13a7aa.chunk.js.map