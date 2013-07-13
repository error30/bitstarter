var fs = require('fs');
var express = require('express');
var buffer = new Buffer(str);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var out = buffer;
  buffer.write(fs.readFile('index.html'));
  response.send(out.toString('utf-8'));


});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
