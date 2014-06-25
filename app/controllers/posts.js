import Ember from 'ember';

export default Ember.ArrayController.extend({
  showRecent: null,
  init: function () {
    this._super();
    this.set('showRecent', true);
  }
});