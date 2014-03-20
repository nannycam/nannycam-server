

var net = require("net");

var server = net.createServer(function (sock) {
	console.log("Server connected");
	sock.on('end', function() {
    	console.log('server disconnected');
  	});
  	setInterval(function(){
  		var points = {"points":[{"x":getRandomPoint(),"y":getRandomPoint()}]};
		sock.write(JSON.stringify(points)+"\r\n");
  	},1500);
  	sock.pipe(sock);

});

server.listen(8080, function () {
	console.log("Server started on port 8080");
});

function getRandomPoint () {
    return Math.round(Math.random() * (100 - 1) + 1);
}