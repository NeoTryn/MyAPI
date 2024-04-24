var mongoose = require('mongoose');
var app = require('./app');

const uri = "mongodb+srv://NeoTryn:Nggyu*99*@cluster0.rezabkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);