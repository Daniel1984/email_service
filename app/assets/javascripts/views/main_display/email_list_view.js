define([
  'backbone',
  'views/main_display/email_item_view',
  'text!templates/main_display/email_list_view.html'
  ], function(Backbone, EmailItemView, template) {

  var EmailListView = Backbone.View.extend({
    tagName: 'table',
    className: 'table table-striped table-condensed tble-bordered',

    initialize: function() {
      this.template = _.template(template);
    },

    render: function() {
      this.$el.html(this.template);
      this.collection.each(this.renderEmailItem, this);
      return this
    },

    renderEmailItem: function(model) {
      this.$('tbody').append(new EmailItemView({model: model}).render().el);
    }

  });
  return EmailListView;
});
