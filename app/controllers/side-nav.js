import Ember from 'ember';

export default Ember.ArrayController.extend({
  init: function () {
    this._super();
    var recentPosts = this.store.find('post');
    this.set('recentPosts', recentPosts);
  }
});