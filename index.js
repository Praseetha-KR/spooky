'use strict';

var app = require('express')();
var http = require('http').Server(app);
var PORT = 3300;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

http.listen(PORT, () => console.log('Listening on *: ' + PORT));
