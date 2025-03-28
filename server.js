const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const express = require ('express');
const cors = require("cors");
const formatMessage = require('./public/utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;

//set static folder
app.use(express.static(path.join(__dirname,'public', "dist")));
app.use(cors()); // Enable CORS for all routes

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  


const botName = 'chatCordBot';

io.on('connection',socket =>{

    socket.on('joinRoom',({username,room})=>{
       console.log('userjoined');
        //socket emit sends a signal to the client that sent the message
        //socket.emit('message',formatMessage(botName,`welcome to chatcord channel: ${room}, ${username}`)); 
        // socket broadcast emit , sends a signal to all other clients except the one who initiated the signal
        //socket.broadcast.emit('message',formatMessage(botName,`${username} has joined the chat`)); // this broadcasts to all clients except the one connecting
    });

    

    
   // io.emit() // emit to All Clients in general

   //runs on disconnect
   socket.on('disconnect',()=>{
    io.emit('message',formatMessage(botName,'a user has left the chat'));
    });

    //listen for a client to be transmitting a chat message
    socket.on('chatMessage',msg =>{
        //now emit this chat message back to everyone
        io.emit('message',formatMessage('user',msg));
    })

    
});



//server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));