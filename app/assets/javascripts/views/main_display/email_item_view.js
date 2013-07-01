define([
  'backbone',
  'text!templates/main_display/email_item_view.html'
  ], function(Backbone, template) {

  var EmailItemView = Backbone.View.extend({
    tagName: 'tr',
    
    events: {
      'click .delete-email-btn': 'deleteEmail',
      'click .restore-email-btn': 'restoreEmail'
    },

    initialize: function() {
      this.template = _.template(template);
      this.model.on('sync', this.remove, this);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    deleteEmail: function(e) {
      e.preventDefault();
      this.model.save({state: 'removed'});
     // this.remove();
    },

    restoreEmail: function(e) {
      e.preventDefault();
      this.model.save({state: 'received'});
      this.remove();
    }

  });
  return EmailItemView;
});
