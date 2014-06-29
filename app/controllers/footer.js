import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['login'],
  init: function() {
    var self = this;
    if(this.get('controllers.login').get('token')) {
      self.set('isLoggedIn', true);
    }
    this._super();
  },
  actions: {
    logout: function () {
      var login = this.get('controllers.login');
      login.set('token', '');
      this.set('isLoggedIn', false);
      this.transitionToRoute('application');
    }
  }
});