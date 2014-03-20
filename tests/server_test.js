var net = require('net');

var client = new net.Socket();
client.connect(8080, '127.0.0.1', function() {

    console.log('CONNECTED TO: ' + '127.0.0.1' + ':' + 8080);
});

client.on('data', function(data) {
    
    console.log('DATA: ' + data);
    client.destroy();
    
});

client.on('close', function() {
    console.log('Connection closed');
});
