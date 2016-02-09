var mongoose = require('mongoose');

var Schema = {
  title: String,
  text: String,
  tags: Array
};

var Content = mongoose.model("Content", Schema, 'content');

Content.remove({}, function(err, data){
	Content.create({title: "Hello World from MongoDB", text: "It is cold outside", tags: ["cool", "hot"]});
});

module.exports = Content;