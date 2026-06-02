var http = require('http');
http.createServer((req, res) => { 
  res.end('Hello World\n');
}).listen(8082);