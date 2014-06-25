import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'section',
  didInsertElement: function() {
    this.$("#slides").slidesjs({
      width: 25,
      height: 15,
      play: {
        active: true,
        effect: "fade",
        interval: 4000,
        auto: true,
        swap: true,
        pauseOnHover: false,
        restartDelay: 1500
      }
    });
  }
});