define([
  'backbone',
  'views/main_display/index_view',
  'views/email_content/index_view'
  ], function(Backbone, MainDisplayView, EmailContentView) {
  var EmailRouter = Backbone.Router.extend({
    currentView: null,

    routes: {
      'folder/:path': 'handlePath',
      'emails/:id': 'renderEmailItem'
    },

    renderView: function(view) {
      if (this.currentView !== null) {
        this.currentView.undelegateEvents();
        this.currentView.remove();
      }
      this.currentView = view;
      $('body').prepend(this.currentView.render().el);
    },

    handlePath: function(path) {
      var view = new MainDisplayView({ path: path });
      this.renderView(view);
    },

    renderEmailItem: function(id) {
      var view = new EmailContentView();
      this.renderView(view);
    }

  });
  return EmailRouter
});
