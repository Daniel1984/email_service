define([
  'backbone'
  ], function(Backbone) {
  
  var ErrorHandler = Backbone.View.extend({
    
    events: {
      'keydown input': 'removeError',
      'keydown textarea': 'removeError'
    },

    initialize: function(attr) {
      this.el = attr.el;
      this.error = JSON.parse(attr.error.responseText);
      this.render();
    },
  
    render: function() {
      var errRef1 = this.error.errors, errRef2 = this.error, val;
      if (errRef1) {
        for (key in errRef1) {
          val = errRef1[key];
          this.renderError(key, val.type);
        }
      } else {
        for (key in errRef2) {
          val = errRef2[key];
          this.renderError(key, val);
        }
      }
    },

    renderError: function(field, msg) {
      this.$("[name=" + field + "]").closest("div[class^='control-group']").addClass('error');
      this.$("[name=" + field + "]").closest("div[class^='controls']").find('.help-inline').remove();
      this.$("[name=" + field + "]").closest("div[class^='controls']").append("<span class='help-inline'>" + msg + "</span>");
    },

    removeError: function(e) {
      var currentTarget = $(e.currentTarget);
      currentTarget.closest("div[class^='control-group']").removeClass('error');
      currentTarget.closest("div[class^='controls']").find('.help-inline').remove();
    }

  });
  return ErrorHandler;
});
