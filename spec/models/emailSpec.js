describe('Email model', function() {
  
  var email;

  beforeEach(function(){
    email = require(process.cwd() + "/app/models/email");
  });

  it("Should not save email with blank fields", function(done){
    email.create({}, function(err, email) {
      expect(err).not.toBe(null);
      expect(email).toEqual(null);
      done();
    });
  });
  
  it("Should not save email with subject field left empty", function(done) {
    email.create({subject: '', recipient: 'daniel@mail.com', content: 'test'}, function(err, email) {
      expect(err).not.toBe(null);
      expect(err.errors.subject.path).toEqual('subject');
      expect(err.errors.subject.type).toEqual('required');
      done();
    });
  });
});
