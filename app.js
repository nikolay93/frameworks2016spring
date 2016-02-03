var express = require('express');
var mongoose = require('mongoose');

var app = express();

var routes = require('./routes/index');
app.use('/', routes);

mongoose.connect('mongodb://localhost/cms');
var db = mongoose.connection;
db.on('open', function(cb){
  console.log('Database is running');
});

app.listen(3000, function(){
  console.log("up and running");
})