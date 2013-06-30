define([
  'backbone',
  'views/main_display/dashboard_view',
  'views/main_display/email_list_view',
  'collections/emails',
  'models/email',
  'spin',
  'text!templates/common/main.html'
  ], function(Backbone, DashboardView, EmailListView, Emails, Email, Spinner, template) {

  var MainDisplayIndexView = Backbone.View.extend({
    className: 'container',

    initialize: function(attr) {
      this.activeTab = attr.activeTab;
      this.emailType = attr.emailType;
      this.template = _.template(template);
      this.emails = new Emails();
      this.emails.on('reset', this.renderEmailList, this);
      this.email = new Email();
      this.email.on('sync', this.getEmails, this);
      this.spinner = new Spinner({color: '#000'});
    },

    render: function() {
      this.$el.html(this.template);
      this.$('.content-container').append(this.spinner.spin().el);
      this.renderDashboard()
      this.getEmails()
      return this
    },

    renderDashboard: function() {
      var dashboardView = new DashboardView({activeTab: this.activeTab, model: this.email});
      this.$('.dashboard-container').append(dashboardView.render().el);
    },

    renderEmailList: function() {
      if (this.listView) this.listView.remove();
      this.spinner.stop();
      if (this.emails.isEmpty()) {
        this.$('.content-container').html("<h3>No emails found</h3>");
      } else {
        this.listView = new EmailListView({collection: this.emails});
        this.$('.content-container').html(this.listView.render().el);
      }
    },

    getEmails: function() {
      var type = this.emailType;
      this.emails.fetch({data: {state: type}, reset: true});
    }
  });
  return MainDisplayIndexView
});
