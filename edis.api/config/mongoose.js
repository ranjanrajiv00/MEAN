var mongoose = require('mongoose');
var users = require('./../app/user-management/user.model');

mongoose.Promise = global.Promise;

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('edis db opened');
    });
}