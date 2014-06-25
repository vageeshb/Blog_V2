import DS from "ember-data";

export default DS.RESTSerializer.extend({
  normalize: function(type, hash) {
    if (!hash) { return hash; }
    this.applyTransforms(type, hash);
    var slug = hash.slug;
    hash.slug = hash.id;
    hash.id = slug;
    return hash;
  },
});