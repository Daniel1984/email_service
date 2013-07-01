define([
  'backbone',
  'models/email',
  'text!templates/email_content/index.html'
  ], function(Backbone, Email, template) {
  
  var EmailContentView = Backbone.View.extend({
    className: 'email-content',
    
    events: {
      'click .delete-btn': 'onDeleteBtnClick',
      'click .reply-btn': 'onReplyBtnClick'
    },

    initialize: function(attr) {
      this.template = _.template(template);
      var bootstrapData = window.emailData;
      this.email = new Email(bootstrapData);
      this.email.on('sync', this.redirectToInbox, this);
    },

    render: function() {
      this.$el.html(this.template(this.email.toJSON()));
      return this;
    },

    onReplyBtnClick: function(e) {
      e.preventDefault();
      alert("We're not building a fully functional Gmail here? Aren't we? =]]")
    },

    onDeleteBtnClick: function(e) {
      e.preventDefault();
      this.email.save({state: 'removed'}); 
    },
  
    redirectToInbox: function() {
      router.navigate('/folder/inbox', {trigger: true});
    }

  });
  return EmailContentView;
});
