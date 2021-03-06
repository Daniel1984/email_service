Email = require(process.cwd() + "/app/models/email");

module.exports.index = function(req, res) {
  Email.index(req.query.state, function(err, posts) {
    if (err) return res.json({}, 422);
    res.json(posts, 200);
  });
}

module.exports.show = function(req, res) { 
  Email.show(req.params.id, function(err, email) {
    if (err) return res.render('error', { title: 'Email error' });
    res.render('email_item', { title: 'Email item', email: JSON.stringify(email) });
  });
}

module.exports.create = function(req, res) {
  Email.create(req.body, function(err, email) {
    if (err) return res.json(err, 422);
    res.json(email, 200);
  });
}

module.exports.update = function(req, res) {
  Email.update(req.body, function(err, email) {
    if (err) return res.render('error', { title: 'Email error' });
    res.json(email, 200);
  });
}
