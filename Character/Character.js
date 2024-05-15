let mongoose = require('mongoose');
let characterSchema = new mongoose.Schema({ 
        name : String, 
        height : Number, 
        alive : Boolean, 
        strength : String, 
        weakness : String,
        url : String});

mongoose.model("Character", characterSchema);
module.exports = mongoose.model("Character");