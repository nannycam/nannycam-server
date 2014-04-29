var net = require("net");
var user = "bob";
var theUser = "";
var pw = "5f4dcc3b5aa765d61d8327deb882cf99";
var thePw = "";
var correctpw= "";
var state = 0;
var unamepatt = /^USER - |.*/
var passpatt = /^PASS - |./

var server = net.createServer(function (sock) {
	console.log("Server connected");
	sock.on('end', function() {
    	console.log('server disconnected');
      close();
  	});
  sock.on('data',function(data) {if(state == 1){
      if(unamepatt.test(data)){
        theUser = data.substr(7);
        //see if user exists
        if(theUser.match(user)){
          //get user's info from db
          thePw = pw;
          state++;
        }
      }
    }
    if(state == 2){
      if(passpatt.test(data)){
        thePw = data.substr(7);
        if(thePw.match(pw)){
          state++;
        }
      }
    }
    if(state == 3){
      //start colors
    }
  });
  sock.on('connect',function(data) {
    if(state == 0){
      sock.write("ok");
      state++;
    }
    
  });
	sock.end();
});

server.listen(8080, function () {
	console.log("Server started on port 8080");
});

function getRandomPoint () {
    return Math.round(Math.random() * 255);
}
