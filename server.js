var express = require('express');
var server = express();
server.use('/', express.static('client/public'));
server.listen(8080);

console.log('Listening on port 8080');