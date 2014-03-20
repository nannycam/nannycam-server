

var net = require("net");

var server = net.createServer(function (sock) {
	console.log("Server connected");
	sock.on('end', function() {
    	console.log('server disconnected');
  	});
	var points = {"points":[{"x":3,"y":4}, {"x":12,"y":14}, {"x":45,"y":1}, {"x":5,"y":6}, {"x":9,"y":5}, {"x":2,"y":2}]};
	sock.write(JSON.stringify(points));
	sock.pipe(sock);
});

server.listen(8080, function () {
	console.log("Server started on port 8080");
});
