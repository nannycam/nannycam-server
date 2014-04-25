var net = require("net");

var server = net.createServer(function (sock) {
	console.log("Server connected");
	sock.on('end', function() {
    	console.log('server disconnected');
  	});

	var buf = new Buffer(640*480*3);
	for (var i = 0; i < buf.length; i++) {
		buf.writeUInt32LE(getRandomPoint(),true);
		if (i % 100000 == 0) console.log(buf[i-1]);
	}

	sock.write(buf);
	sock.end();
});

server.listen(8080, function () {
	console.log("Server started on port 8080");
});

function getRandomPoint () {
    return Math.round(Math.random() * 255);
}
