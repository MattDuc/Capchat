var http = require ('http');
var server = http.createServer();

var express = require('express');

var app = express();

app.get('/getImage/:path', function(request, response) {
    res.send('img/neutres/'+req.params.path);
});

server.listen(8080);