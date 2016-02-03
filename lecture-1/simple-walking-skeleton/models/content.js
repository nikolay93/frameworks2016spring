var mongoose = require('mongoose');

var Schema = {
  title: String,
  text: String,
  tags: Array
};

var Content = mongoose.model("Content", Schema, "cms_content");

Content.remove({}, function(err, data) {
  Content.create(
    {
      title: 'My first post',
      text: '42',
      tags: ['new', 'Tesla']
    }
  )
})

module.exports = Content;