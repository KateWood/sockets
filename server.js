var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	server		= require('http').createServer(app)