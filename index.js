let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {

socket.emit('command-to-device',{msg: '*AA$PR1#'});
  
console.log(socket);
  
  socket.on('send-message', (message) => {  
    io.emit('command-to-device', {msg: '*AA$PR1#', event: 'position-request'}); 
    console.log('------------');
    console.log(message);
    console.log('------------');
  });

  socket.on('command-from-device', (message) =>{
    console.log('------------');
    console.log(message);
    console.log('------------');
  })
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});