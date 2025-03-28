const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');


const {username,room} =Qs.parse(location.search,{
    ignoreQueryPrefix : true
});

console.log(username,room);

const socket = io();

//Join Chatroom
socket.emit('joinRoom',{username,room});

//client is picking up a chat message delivered from the server here.
socket.on('message',message =>{
    console.log(message);
    outputMessage(message);// function to actually add the message to the dom
    //scroll screendown
    chatMessages.scrollTop = chatMessages.scrollHeight;
})

//message submit, use event listener on our send button which is a form
chatForm.addEventListener('submit',(e)=>{
    e.preventDefault(); //stop button from submitting to a file as its default form button

    const msg = e.target.elements.msg.value;
    console.log(msg);
    //emit message to the server
    socket.emit('chatMessage',msg); //server needs to catch this
    e.target.elements.msg.value=''; //set chat text form to blank
    e.target.elements.msg.focus();;
});

//output message to DOM
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
    <p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
    ${message.text}
    </p>
    `;

    const chatWindow = document.getElementsByClassName('chat-messages');
    chatWindow[0].appendChild(div);

}


// Current Learning TimeStamp: 38:19
//npm run dev