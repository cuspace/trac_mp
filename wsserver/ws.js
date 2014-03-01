var WebSocketServer = require('ws').Server
	, wss = new WebSocketServer({port: 8080});

wss.on('connection', function(ws) {
	console.log('ready');
	ws.on('message', function(message) {
		console.log('received: %s', message);
		var m = JSON.parse(message);
		if(m.type === 'mc') {
		  console.log(m.alpha);
		};
	});
	ws.send('something');
});