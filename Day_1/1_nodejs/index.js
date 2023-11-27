var http = require("http");

http.createServer(function(request,response){

response.writeHead(200,{'content-Type':'text/plain'});

response.end("Hello World\nSANJEEVIKUMAR-7376222AL192");
}).listen(3100);

console.log('Server running at http://127.0.0.1:3100/');