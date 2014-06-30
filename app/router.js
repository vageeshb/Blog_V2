import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BlogENV.locationType
});

Router.map(function() {
  
  this.resource('posts', function () {
    this.route('new');
    this.resource('post', { path: ':slug' });
  });

  this.route('about');
  this.route('contact');
  this.route('login');

});

Router.reopen({
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});

export default Router;
