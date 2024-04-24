var express = require('express');
var db = require('./db');
var app = express();

var UserController = require('./User/UserController');
app.use('/users', UserController);

module.exports = app;