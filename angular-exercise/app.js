var express = require('express');
var mongoose = require('mongoose');
var dbname = 'mycms';
var path = require('path');

var app = express();

app.use(express.static('public'));

var routes = require('./routes/index');
app.use('/', routes);

mongoose.connect("mongodb://localhost/" + dbname);
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function(callback){
	console.log("MongoDB connection established to " + dbname);
});

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log("Listening on port " + port);
});


