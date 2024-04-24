var express = require('express');
var db = require('./db');
var cors = require('cors');

var app = express();

app.use(cors());

var UserController = require('./User/UserController');
app.use('/users', UserController);

module.exports = app;