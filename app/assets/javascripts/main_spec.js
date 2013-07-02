require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    backbone_datalink: 'libs/backbone_datalink',
    text: 'libs/requirejs/text',
    spin: 'libs/spin',
    bootstrap: 'libs/bootstrap',
    jasmine: 'libs/jasmine',
    'jasmine-html': 'libs/jasmine-html', 
    'jasmine-jquery': 'libs/jasmine-jquery',
    spec: './spec/'
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
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    'jasmine-jquery': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});


window.store = "TestStore"; // override local storage store name - for testing

require(['underscore', 'jquery', 'jasmine-html', 'jasmine-jquery'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;
  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];
  specs.push('spec/views/main_display/index_viewSpec');
  specs.push('spec/views/main_display/dashboard_viewSpec');
  specs.push('spec/views/main_display/compose_email_modalSpec');

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
