define([
  'backbone',
  'views/helpers/error_handler',
  'text!templates/main_display/compose_email_modal.html',
  'bootstrap'
  ], function(Backbone, ErrorHandler, template) {

  var ComposeEmailModal = Backbone.View.extend({
    className: 'modal hide fade',

    events: {
      'click .send-email-btn': 'sendEmail'
    },

    initialize: function() {
      this.template = _.template(template);
      this.model.on('sync', this.handleSuccess, this);
      this.model.on('error', this.handleError, this);
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$('form').backboneLink(this.model);
      this.$el.modal('show');
      return this
    },

    sendEmail: function(e) {
      e.preventDefault();
      this.model.save();
    },

    handleSuccess: function(model, response) {
      this.$el.modal('hide');
      model.clear();
    },

    handleError: function(model, error) {
      new ErrorHandler({el: this.$el, error: error});
    }

  });
  return ComposeEmailModal;
});
