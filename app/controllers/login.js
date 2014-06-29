import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['footer'],
  reset: function() {
    this.setProperties({
      username: "",
      password: "",
      errorMessage: "",
      token: localStorage.token
    });
    if(localStorage.token) {
      this.get('controllers.footer').set('isLoggedIn', true);
    }
  },

  token: localStorage.token,

  tokenChanged: function () {

    if(this.get('token') === '') {
      localStorage.removeItem('token');
      this.get('controllers.footer').set('isLoggedIn', false);
    } else {
      localStorage.token = this.get('token');
      this.get('controllers.footer').set('isLoggedIn', true);
    }
    
    $.ajaxPrefilter(function(options, originalOptions, xhr) {
      return xhr.setRequestHeader('Token', localStorage.token);
    });

  }.observes('token'),

  actions: {
    authenticate: function () {
      var self = this,
      data = this.getProperties('username', 'password');
      self.set('errorMessage', null);
      Ember.$.post('/api/auth', data).then(function(response) {
        self.set('errorMessage', response.message);
        if(response.success) {
          self.set('token', response.token);
          self.transitionTo('posts.new');
          self.get('controllers.footer').set('isLoggedIn', true);
        }
      });
    },
    
  }
});