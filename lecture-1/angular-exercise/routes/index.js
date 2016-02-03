var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Content  = require('../models/content');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ route: "index" });
});

router.get('/content', function(req, res, next) {
    Content.find(function(err, data){
      if(err) console.log(err);
      res.json(data);
    });
});

router.get('/hello', function(req, res, next) {
  res.send('Hello from this side');
});

module.exports = router;