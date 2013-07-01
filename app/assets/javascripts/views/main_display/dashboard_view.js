define([
  'backbone',
  'views/main_display/compose_email_modal',
  'text!templates/main_display/dashboard.html'
  ], function(Backbone, ComposeEmailModal, template) {

  var DashboardView = Backbone.View.extend({
    className: 'tabbable tabs-left main-dashboard',
    
    events: {
      'click .compose-btn': 'composeEmail'
    },

    initialize: function(attr) {
      this.template = _.template(template);
      this.activeTab = attr.activeTab;
    },

    render: function() {
      this.$el.html(this.template);
      this.$('li.active').removeClass('active');
      this.$("a[href$="+this.activeTab+"]").closest('li').addClass('active');
      return this
    },

    composeEmail: function(e) {
      e.preventDefault()
      new ComposeEmailModal({model: this.model});
    }

  });
  return DashboardView
});
