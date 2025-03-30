const path = require('path');
const http = require('http');
const express = require ('express');
const { Server } = require("socket.io");

const cors = require("cors");
const formatMessage = require('./public/utils/messages');

const app = express();
const server = http.createServer(app);

const io = new Server(server);


const PORT = process.env.PORT || 3000;


io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on('joinRoom',({username,room})=>{
        console.log(` ${username} joined room: ${room}`);
    });
    //socket emit sends a signal to the client that sent the message
    //socket.emit('message',formatMessage(botName,`welcome to chatcord channel: ${room}, ${username}`)); 
    // socket broadcast emit , sends a signal to all other clients except the one who initiated the signal
    //socket.broadcast.emit('message',formatMessage(botName,`${username} has joined the chat`)); // this broadcasts to all clients except the one connecting
  });
  
  server.listen(3000, () => {
    console.log("Socket.IO server is running on port 3000");
  });
  



/*
io.on('connection',socket =>{
    console.log("A user connected:", socket.id);
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
*/