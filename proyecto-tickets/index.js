var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', cliente =>{
  console.log('a user connected');
  cliente.on('disconnect', () =>{
    console.log('a user has disconnected');
  })
});
// io.on('disconnect', function(socket){
 
// });

http.listen(3005, function(){
  console.log('listening on *:3005');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});