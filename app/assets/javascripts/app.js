define(['jquery', 'backbone', 'router'], function($, Backbone, EmailRouter) {
  return {
    init: function() {
      router = new EmailRouter()
      Backbone.history.start({pushState: true}) 
      //router.navigate('/folder/inbox', {trigger: true}); 
    }
  };
});
