let express = require('express');
let db = require('./db');
let cors = require('cors');

let app = express();

app.use(cors());

let UserController = require('./User/UserController');
app.use('/users', UserController);

let CharacterController = require('./Character/characterController');
app.use('/characters', CharacterController);

module.exports = app;