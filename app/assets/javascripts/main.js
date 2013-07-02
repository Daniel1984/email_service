require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    backbone_datalink: 'libs/backbone_datalink',
    text: 'libs/requirejs/text',
    domready: 'libs/requirejs/domready',
    bootstrap: 'libs/bootstrap',
    spin: 'libs/spin'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery', 'backbone_datalink'],
      exports: 'Backbone'
    },
    backbone_datalink: {
      deps: ['jquery'],
      exports: 'jQuery.fn.backboneLink'
    },
    bootstrap: {
      deps: ['jquery']
    }
  }
});

require(['domready', 'app', 'bootstrap'], function(domReady, app) {
  return domReady(function() {
    return app.init();
  });
});
