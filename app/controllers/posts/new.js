import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['posts'],
  columns: 'One Column',
  actions: {
    hide: function () {
      var posts = this.get('controllers.posts');
      posts.toggleProperty('showRecent');
      var columns = this.get('columns');
      if (columns === 'One Column') {
        this.set('columns', 'Two Columns');
        $("#content").css('width', '100%');
      } else {
        this.set('columns', 'One Column');
        $("#content").css('width', '80%');
      }
    }
  }
});