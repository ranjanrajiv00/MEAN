'use strict';

var mongoose = require('mongoose');
var users = mongoose.model('Users');

exports.get = function (req, res) {
    users.find({}, ['_id', 'firstName', 'lastName', 'userName', 'password', 'email', 'phone'], function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.getById = function (req, res) {
    users.findById(req.params.id, ['_id', 'firstName', 'lastName', 'userName', 'password', 'email', 'phone'], function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.add = function (req, res) {
    delete req.body._id;
    var newUser = new users(req.body);
    
    newUser.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update = function (req, res) {
    var newUser = new users(req.body);

    users.findById(newUser._id, ['_id', 'firstName', 'lastName', 'userName', 'password', 'email', 'phone'], function (err, user) {
        if (err)
            res.send(err);
        user.firstName = newUser.firstName || user.firstName;
        user.lastName = newUser.lastName || user.lastName;
        user.userName = newUser.userName || user.userName;
        user.password = newUser.password || user.password;
        user.email = newUser.email || user.email;
        user.phone = newUser.phone || user.phone;

        user.save(function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    });
};

exports.delete = function (req, res) {    
    users.findById(req.params.id, ['_id', 'firstName', 'lastName', 'userName', 'password', 'email', 'phone'], function (err, user) {
        if (err)
            res.send(err);

        user.remove(function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    });
};