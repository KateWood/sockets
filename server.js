var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	server		= require('http').createServer(app),
	port 		= process.env.PORT || 3000

app.use(logger('dev'))



server.listen(port, function() {
	console.log('Server is running on port', port)
})
var io = require('socket.io')(server)