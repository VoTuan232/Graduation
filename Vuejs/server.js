const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  console.log('hihi');
});
server.listen(3000);