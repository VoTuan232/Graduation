var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');

server.listen(8890);

io.on('connection', function(socket) {
	//CommentPost
	var redisClient = redis.createClient();
	redisClient.subscribe('message');
	//message từ controller Predis Laravel 
	redisClient.on('message', function(chanel, message) {
		// console.log('new commment', chanel, message);
		socket.emit(chanel, message);
	});

	//CommentQuestion
	redisClient.subscribe('commentQuestion');
	redisClient.on('commentQuestion', function(chanel, message) {
		// console.log('new commment', chanel, message);
		socket.emit(chanel, message); //chanel is: commentQuestion, value is: message
	});
})
