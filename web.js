var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var fileBuff; 

fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  fileBuff = new Buffer(data, 'utf-8');
});

app.get('/', function(request, response) {
  response.send(fileBuff.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
