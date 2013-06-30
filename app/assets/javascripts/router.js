define([
  'backbone',
  'views/main_display/index_view'
  ], function(Backbone, MainDisplayView) {
  var EmailRouter = Backbone.Router.extend({
    currentView: null,

    routes: {
      'folder/inbox': 'index',
      'folder/sent': 'sent',
      'folder/trash': 'trash'
    },

    renderView: function(view) {
      if (this.currentView !== null) {
        this.currentView.undelegateEvents();
        this.currentView.remove();
      }
      this.currentView = view;
      $('body').prepend(this.currentView.render().el);
    },

    index: function() {
      var mainDisplayView = new MainDisplayView({emailType: 'received', activeTab: 'inbox'});
      this.renderView(mainDisplayView);
    },

    sent: function() {
      var mainDisplayView = new MainDisplayView({emailType: 'received', activeTab: 'sent'});
      this.renderView(mainDisplayView);
    },

    trash: function() {
      var mainDisplayView = new MainDisplayView({emailType: 'removed', activeTab: 'trash'});
      this.renderView(mainDisplayView);
    }

  });
  return EmailRouter
});
