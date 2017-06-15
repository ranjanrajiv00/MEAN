var express = require('express');
var bodyParser = require('body-parser');

module.exports = function (app, config) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}