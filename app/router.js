module.exports = function(app){

  var ctrlPath = process.cwd() + "/app/controllers",
      homeController = require(ctrlPath + "/home_controller"),
      emailController = require(ctrlPath + "/email_controller");
      
  app.get('/', homeController.index);

  app.namespace('/folder', function() {
    app.get('/inbox', homeController.inbox);
    app.get('/sent', homeController.sent);
    app.get('/trash', homeController.trash); 
  });
  app.get('/emails', emailController.index);
  app.post('/emails', emailController.create);
  app.put('/emails/:id', emailController.update);
};

