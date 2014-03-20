

var net = require("net");


var server = net.createServer(function (c) {
	console.log("Server connected");
});

server.listen(8080, function () {
	console.log("Server started on port 8080");
});
