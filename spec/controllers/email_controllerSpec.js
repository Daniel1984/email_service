describe('Email controller', function() {
  
  var emailController = require(process.cwd() + "/app/models/email");

  it("Should return error if try to save empty object", function(done) {
    emailController.create({}, function(err, email) {
      expect(err).not.toBe(null);
      done();
    });
  });
});
