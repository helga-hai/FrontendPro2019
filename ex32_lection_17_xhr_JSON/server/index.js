/*написано на Noda. Когда я запущу этот файл - консоль залипнет и поднимется сервер на указанном порту*/
var http = require('http');
var static = require('node-static');
var file = new static.Server('.');
let port = 7274;

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(port);

console.log(`Server running on port ${port}`);