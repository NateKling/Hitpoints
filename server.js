const path = require('path');
const http = require('http');
const express = require ('express');
const { Server } = require("socket.io");

const cors = require("cors");
const formatMessage = require('./public/utils/messages');

const app1 = express();
const server = http.createServer(app1);

const io = new Server(server);

let rooms = [];

const PORT_MULTIPLAYER = process.env.PORT || 3000;



io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on('joinRoom',({username,room})=>{
        console.log(` ${username} joined room: ${room}`);
        socket.join(room);
        socket.broadcast.to(room).emit('userJoined',({username:username}));
    });
    socket.on('fireLaser',({username,room,damage})=>{
        console.log(` ${username} fired a laser in room: ${room} with damage: ${damage}`);
        socket.broadcast.to(room).emit('receiveLaser',({damage}));
    })
    //socket emit sends a signal to the client that sent the message
    //socket.emit('message',formatMessage(botName,`welcome to chatcord channel: ${room}, ${username}`)); 
    // socket broadcast emit , sends a signal to all other clients except the one who initiated the signal
    //socket.broadcast.emit('message',formatMessage(botName,`${username} has joined the chat`)); // this broadcasts to all clients except the one connecting
  });
 

  server.listen(PORT_MULTIPLAYER, () => {
    console.log("Socket.IO server is running on port 3000");
  });
  

  //CODE TO SERVE THE HTML SIDE OF THE SERVER ON PORT 4000

  const PORT_APP = 443; //instead of 4000, 443 is https, 80 is http
  const app2 = express();

  //serve static files for app
  app2.use(express.static(path.join(__dirname,"public/dist")));

  app2.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/dist","login.html"));
  })
  app2.listen(PORT_APP,()=>{
    console.log(`app server is running on http://localhost:${PORT_APP}`);
  })





 
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  const randomString = generateRandomString(4);
  




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