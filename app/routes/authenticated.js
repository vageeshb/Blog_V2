import Ember from 'ember';

export default Ember.Route.extend({
  getJSONWithToken: function(url) {
    var token = this.controllerFor('login').get('token');
    return $.getJSON(url, { token: token });
  },
  actions: {
    error: function(reason) {
      if(reason.status === 401) {
        this.transitionTo('login');
      } else {
        alert('Something went wrong!');
      }
    }
  }
});