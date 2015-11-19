var express	= require('express'),
	app		= express(),
	logger	= require('morgan'),
	server	= require('http').createServer(app),
	port 	= process.env.PORT || 3000,
	Twit 	= require('twit')

app.use(logger('dev'))


server.listen(port, function() {
	console.log('Server is running on port', port)
})
var io = require('socket.io')(server)
var twitter = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})