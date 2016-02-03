var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Node.js');
  console.log('I have been hit');
  console.log('It is your own fault');
}).listen(3000);

http.createServer(function(req, res){
  var method = req.method;
  var url = req.url;
  if(method === 'GET') {
    if(url === '/content') {
      res.write('Content has been fetched');
    }
    else {
      res.write('Nothing happened on this day');
    }
    res.end();
  }
}).listen(4000);