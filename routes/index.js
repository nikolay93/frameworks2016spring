var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Content = require('../models/content');


router.get('/hello', function(req, res) {
  res.json( {route: 'hello'});
})

router.get('/content', function(req, res) {
  Content.find(function(err, data){
    res.json(data);
  })
})

module.exports = router;