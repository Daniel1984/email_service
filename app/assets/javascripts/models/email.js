define([
  'backbone'
  ], function(Backbone) {
  
  var Email = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: '/emails'
  });
  return Email;
});
