module.exports.index = function(req, res) {
  res.redirect('folder/inbox');
}

module.exports.inbox = function(req, res) {
  res.render('index', { title: 'Email inbox' });
}

module.exports.sent = function(req, res) {
  res.render('index', { title: 'Email sent' });
}

module.exports.trash = function(req, res) {
  res.render('index', { title: 'Email trash' });
}
