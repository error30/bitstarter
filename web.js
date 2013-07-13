var fs = require('fs');
var express = require('express');
var buffer = new Buffer(str);
var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, data) {
if (err) throw err;

app.get('/', function(request, response) {
  response.send(buffer);
});
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
