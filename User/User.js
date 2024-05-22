let mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    pictureLink : String});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');