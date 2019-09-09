let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {

socket.emit('command-to-device',{msg: '*AA$PR1#'});
  
console.log(socket);
  
  socket.on('command-to-device', (message) => {  
    socket.emit('command-to-device',{msg: '*AA$PR1#'});
    console.log('------------');
    console.log(message);
    console.log('------------');
  });

  socket.on('command-from-device', (message) =>{
    io.emit('confirmation', {msg: 'Mensaje Recibido en la Central', event: 'message_received'}); 
    console.log('------------');
    console.log(message);
    console.log('------------');
  })
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});