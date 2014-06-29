import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('post', params.slug);
  },

  serialize: function (record/*, options*/) {
    var json = this._super.apply(this, arguments);
    if (!json) { return json; }
    if (json.id) {
      json.id = record.get('slug');
    }
    var id = record.get('id');
    if (id) {
      json.slug = id;
    }
    return json;
  },
  actions: {
    error: function(reason) {
      if (reason.status === 404) {
        this.transitionTo('posts');
      }
    },
  },
});