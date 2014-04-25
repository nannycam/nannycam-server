var net = require('net');


exports['data format'] = function (test) {
	test.expect(3);
	var client = new net.Socket();
	client.connect(8080, '127.0.0.1', function() {
		console.log('CONNECTED TO: ' + '127.0.0.1' + ':' + 8080);
	});
	client.on('data', function(data) {
		var d = JSON.parse(data);
		console.dir(d);
		test.ok(d);
		test.ok(d.points);
		test.equal(d.points.length,1);
		client.destroy();
	});
	client.on('close', function() {
		//console.log('Connection closed');
		test.done();
	});
};

