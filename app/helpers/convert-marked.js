import Ember from 'ember';


export default Ember.Handlebars.makeBoundHelper(function(data) {
  if(data != null) {
    return new Ember.Handlebars.SafeString(
      marked(data, {
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        }
      }, function(err, content) {
        return content;
      })
    );
  }
});