import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['posts', 'login'],
  show: 'Hide Side Bar',
  actions: {
    hide: function () {
      var posts = this.get('controllers.posts');
      posts.toggleProperty('showRecent');
      if (posts.get('showRecent') === false) {
        $("#content").css('width', '100%');
        this.set('show', 'Show Side Bar');
      } else {
        $("#content").css('width', '80%');
        this.set('show', 'Hide Side Bar');
      }
    },
    save: function () {
      var store = this.store,
      self = this,
      title = this.get('title'),
      summary = this.get('summary'),
      body = this.get('body');
      
      $.ajaxPrefilter(function(options, originalOptions, xhr) {
        return xhr.setRequestHeader('Token', localStorage.token);
      });

      if(title && summary && body) {
        var post = store.createRecord('post', {
          title : title,
          summary : summary,
          title_image: 'https://artsyvb.s3.amazonaws.com/255161',
          slug: title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''),
          body : body,
          creator : 'Vageesh',
          created : new Date()
        });
        post.save().then( function() {
          self.transitionToRoute('post', post);
        }, function(reason) {
          if(reason.status === 401) {
            self.transitionToRoute('login');
          } else {
            alert('Something went wrong!');
          }
        });
      }
    }
  }
});