import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(data) {
  return moment(new Date(data)).fromNow();
});