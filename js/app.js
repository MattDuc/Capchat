var http = require ('http');
var server = http.createServer();

var express = require('express');

var app = express();

app.get('/getImage/:path', function(request, response) {
    response.send('img/neutres/'+req.params.path);
});

// Ou alors

app.get('/getImages', function(request, response) {
    response.send(("'img/neutres/chat_neutre1.jpg', 'img/neutres/chat_neutre2.jpg', 'img/neutres/chat_neutre3.jpg', 'img/neutres/chat_neutre4.jpg', 'img/neutres/chat_neutre5.jpg', 'img/neutres/chat_neutre6.jpg', 'img/neutres/chat_neutre7.jpg', 'img/neutres/chat_neutre8.jpg', 'img/neutres/chat_neutre9.jpg','img/neutres/chat_neutre10.jpg', 'img/neutres/chat_neutre11.jpg', 'img/neutres/chat_neutre12.jpg', 'img/neutres/chat_neutre13.jpg'")
});

server.listen(8080);