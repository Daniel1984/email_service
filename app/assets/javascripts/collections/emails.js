define([
  'backbone',
  'models/email'
  ], function(Backbone, EmailModel) {
  
  var Emails = Backbone.Collection.extend({
    model: EmailModel,
    url: '/emails'
  });
  return Emails;
});
