var config = require('config'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

var username = config.database.user,
    password = config.database.pass,
    address = config.database.address,
    url = "mongodb://" + username + ":" + password + address,
    connect;

connect = function() {
  mongoose.connect(url);
}

module.exports.disconnect = function(){
  mongoose.disconnect();
}

connect();
