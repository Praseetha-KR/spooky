'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = 3300;

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {
    console.log('user connected ');
    socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(PORT, () => console.log('Listening on *: ' + PORT));


