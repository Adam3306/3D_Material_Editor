import BABYLON from "babylonjs";

class Texture extends BABYLON.Texture {
  constructor(e, n, r, i, o, s) {
    if (void 0 === o) o = BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
    if (void 0 === s) s = BABYLON.Engine.TEXTUREFORMAT_RGB;
    super(e, n, !1, !0, o, r, i, null, !1, s);
    this.mTextureMatrix = null;
    this.mIsClone = !1;
    this.isResource = !1;
    this.isFallback = !1;
    this.id = "";
  }

  notifyTextureMatrixChanged() {
    this.mTextureMatrix = null;
  }

  getTextureMatrix() {
    if (null == this.mTextureMatrix) {
      var e = BABYLON.Matrix.Scaling(this.uScale, this.vScale, 1),
        t = BABYLON.Matrix.RotationYawPitchRoll(this.vAng, this.uAng, this.wAng),
        n = BABYLON.Matrix.Identity();
      n.m[8] = this.uOffset;
      n.m[9] = this.vOffset;
      var r = e;
      t.multiplyToRef(r, r);
      n.multiplyToRef(r, r);
      this.mTextureMatrix = r;
    }
    return this.mTextureMatrix;
  }

  clone() {
    var e = this,
      t = BABYLON.SerializationHelper.Clone(function() {
        return new Texture(e.url, e.getScene(), null, null, e._samplingMode, e._format);
      }, this);
    return (
      (t.mIsClone = !0),
      (t.isResource = this.isResource),
      (t.isFallback = this.isFallback),
      (t.id = this.id),
      t
    );
  }

  /*static serialize(t, r) {
    if (null == r || null == t) return null;
    if (!(r instanceof Texture && r.isResource)) return null;
    var i = {};
    return (
      (i.texture = t.addTexture(r.id)),
      (e.utils.math.eq(r.uOffset, 0) && e.utils.math.eq(r.vOffset, 0)) ||
        (i.offset = [r.uOffset, r.vOffset]),
      (e.utils.math.eq(r.uScale, 1) && e.utils.math.eq(r.vScale, 1)) ||
        (i.scale = [r.uScale, r.vScale]),
      (e.utils.math.eq(r.uAng, 0) && e.utils.math.eq(r.vAng, 0) && e.utils.math.eq(r.wAng, 0)) ||
        (i.rotation = [r.uAng, r.vAng, r.wAng]),
      i
    );
  }

  static deserialize(e, t, n) {
    if (null == t || null == e) return null;
    var r = t.getTextureIdByIndex(e.texture),
      i = n.getTexture(r);
    return null == i
      ? null
      : ((null == e.offset && null == e.scale && null == e.rotation) ||
          ((i = i.clone()),
          null != e.offset && ((i.uOffset = e.offset[0]), (i.vOffset = e.offset[1])),
          null != e.scale && ((i.uScale = e.scale[0]), (i.vScale = e.scale[1])),
          null != e.rotation &&
            ((i.uAng = e.rotation[0]), (i.vAng = e.rotation[1]), (i.wAng = e.rotation[2])),
          i.notifyTextureMatrixChanged()),
        i);
  }*/
}

Object.defineProperty(Texture.prototype, "isClone", {
  get: function() {
    return this.mIsClone;
  },
  enumerable: !0,
  configurable: !0,
});

export default Texture;
