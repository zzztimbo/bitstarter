var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var data; 

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
}

app.get('/', function(request, response) {
  response.send('Hello World 2!');
  response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
