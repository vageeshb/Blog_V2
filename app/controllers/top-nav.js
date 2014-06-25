import Ember from 'ember';

export default Ember.ArrayController.extend({
  content: Ember.A([
    Ember.Object.create({name: 'Home', location: 'application', active: null}),
    Ember.Object.create({name: 'About', location: 'about', active: null}),
    Ember.Object.create({name: 'Contact', location: 'contact', active: null})
  ]),
  title: 'Mistaken Identity'
});

