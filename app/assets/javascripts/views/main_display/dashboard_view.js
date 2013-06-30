define([
  'backbone',
  'views/main_display/compose_email_modal',
  'text!templates/main_display/dashboard.html'
  ], function(Backbone, ComposeEmailModal, template) {

  var DashboardView = Backbone.View.extend({
    className: 'tabbable tabs-left main-dashboard',
    
    events: {
      'click .compose-btn': 'composeEmail',
      'click li a': 'changeContent'
    },

    initialize: function(attr) {
      this.template = _.template(template);
      this.activeTab = attr.activeTab;
    },

    render: function() {
      this.$el.html(this.template);
      this.$('li.active').removeClass('active');
      this.$("a." + this.activeTab).closest('li').addClass('active');
      return this
    },

    composeEmail: function(e) {
      e.preventDefault()
      new ComposeEmailModal({model: this.model});
    },

    changeContent: function(e) {
      e.preventDefault();
      var contentType = ($(e.currentTarget).attr('class'));
      // had to do this as href attr was overriden by bootstrap nav plugin and couldn't navigate
      switch (contentType) {
        case 'sent':
          router.navigate('/folder/sent', {trigger: true});
          break;
        case 'trash':
          router.navigate('/folder/trash', {trigger: true});
          break;
        case 'inbox':
          router.navigate('/folder/inbox', {trigger: true});
          break;
      }
    }

  });
  return DashboardView
});
