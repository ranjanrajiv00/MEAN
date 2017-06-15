'use strict';

var mongoose = require('mongoose');
var users = mongoose.model('Users');
var config = require('./../../config/config')[process.env.NODE_ENV];

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

exports.authenticate = function (req, res) {
    users.findOne({ userName: req.body.userName }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.secret);

                // return the information including token as JSON
                res.json({
                    statusCode: 200,
                    message: 'Authenticated',
                    data: {
                        _id:user._id,
                        userName:user.userName,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        token: token
                    }
                });
            }
        }
    });
};