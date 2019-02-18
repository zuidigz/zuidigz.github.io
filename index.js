var express = require('express');
var server = express();

var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'/public'));

server.get('/', function(request, response){
  response.sendFile('public/html/home-portfolio-minimal.html', {root: __dirname});
});

server.get('/#about', function(request, response){
  response.sendFile('public/html/home-portfolio-minimal.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port ...' + port);
});
