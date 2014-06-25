import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

 var App;

module('Integration tests - Posts', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  },
});

test('Side-Nav', function () {
  expect(2);
  visit('/').then(function () {
    equal(find('.side-nav').length, 1, 'Should show side nav');
    equal(find('ul.recent-posts > li').length, 3, 'Should list recent posts');
  });
});
test('Show Post', function () {
  expect(3);
  visit('/first-post').then(function () {
    equal(find('h2').length, 1, 'Should show title');
    equal(find('.post-info').length, 1, 'Should show post info');
    equal(find('.post-body').length, 1, 'Should show content');
  });
});