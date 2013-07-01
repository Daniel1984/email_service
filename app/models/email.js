var db = require(process.cwd() + "/db/mongo"),
    validator = require("mongoose-validator").validate,
    emailValidator = [validator({message: 'invalid email address'}, 'isEmail')],
    EmailSchema = new db.Schema({
      from: { type: String, default: 'from@you.com' },
      recipient: { type: String, required: true, validate: emailValidator },
      subject: { type: String, required: true },
      content: { type: String, required: true },
      state: { type: String, default: 'received' },
      created_at: { type: Date }
    }),
    Email = db.mongoose.model('email', EmailSchema);


module.exports.index = function(state, cb) {
  Email
    .where('state').equals(state)
    .exec(function(err, emails) {
      cb(null, emails);
    });
}

module.exports.create = function(email, cb) {
  email.created_at = new Date();
  Email(email).save(function(err, email) {
    if (err) return cb(err, null);
    cb(null, email);
  });
}

module.exports.show = function(id, cb) {
  Email.findById(id, function(err, email) {
    if (err) return cb(err, null);
    cb(null, email);
  });
}

module.exports.update = function(email, cb) {
  var emailRef = email._id;
  delete email._id;
  Email.update({ _id: emailRef }, email, function(err, emailRes){
    cb(err, emailRes);
  });
}
