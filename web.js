var fs = require('fs');
var express = require('express');
var buffer = new Buffer(fs.readFileSync('index.html'));
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var out = buffer;
  response.send(out.toString('utf-8'));


});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
