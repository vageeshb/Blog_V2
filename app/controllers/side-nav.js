import Ember from 'ember';

export default Ember.ArrayController.extend({
  recentPosts: null,
  init: function () {
    this._super();
    var recentPosts = this.store.find('post');
    this.set('recentPosts', recentPosts);
  }
});