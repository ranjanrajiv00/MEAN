'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    Required: 'Kindly enter the firstname'
  },
  lastName: {
    type: String,
    Required: 'Kindly enter the lastname'
  },
  userName: {
    type: String,
    Required: 'Kindly enter the username'
  },
  password: {
    type: String,
    Required: 'Kindly enter the password'
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);
