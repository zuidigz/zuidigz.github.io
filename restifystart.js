var http = require('http'),
    connect = require('connect'),
    rest = require('node-restify'); 
 
var app = connect()
    .use(rest());
 
 
http.createServer(app).listen(8080);	
 
resource('/rest', function() {
    get('/{name}', function(name) {
        return {msg: 'hello ' + name};
    });
});