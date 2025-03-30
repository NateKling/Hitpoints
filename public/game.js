console.log('connected');


import van from "vanjs-core";
const {a,div,li,p,ul,img} = van.tags;
const rive= require ('@rive-app/canvas');
import { Rive, EventType, RiveEventType } from '@rive-app/canvas';
const sounds = require('./utils/sounds.js');
const qs = require('qs');

import { io } from "socket.io-client";
const socket = io('http://localhost:3000');


const canvas = document.createElement('canvas');
canvas.width = 130;
canvas.height = 320;
document.body.appendChild(canvas);

let username='user';
let room='';

const loginData = Qs.parse(location.search,{
    ignoreQueryPrefix : true
});
if (loginData.username != undefined) { // if we are offline, ignore
username = loginData.username;
room = loginData.room;
}


let hp = '100';
let laserDamage = 1;
let hpHitTrigger;
let mainArtboard;
socket.emit('joinRoom',{'username':username,'room':room});

const riveInstance = new rive.Rive({
    src: new URL('./assets/rive/hitpoints1.riv',import.meta.url),
    canvas: canvas,
    autoplay: true,
    artboard: "Main", // Optional. If not supplied the default is selected
    stateMachines: "Main_StateMachine",
   
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
      const inputs = riveInstance.stateMachineInputs("Main_StateMachine");
      hpHitTrigger = inputs.find((input) => input.name === "HPHitTrigger");
    //mainArtboard = riveInstance.artboard("Main");
      setRiveText("P1Label",username); //Needs to be located in onLoad at first , otherwise its called before the rive app is loaded in
      setRiveText("HPLabel",hp);

    },
});
riveInstance.on(EventType.RiveEvent,onRiveEventReceived);


function setRiveText(runName,text)
{
    riveInstance.setTextRunValue(runName, text);
}

function onRiveEventReceived(riveEvent) {
    const eventData = riveEvent.data;
    //const eventProperties = eventData.properties;
    console.log('Recieved Rive Event!: ',eventData.name);
    if (eventData.name == 'FireEvent'){
        sounds.laser1.play();
        socket.emit('fireLaser',{'username':username,'room':room,'damage':laserDamage});
    }
    else if (eventData.name == 'HitEvent'){
        console.log('Hit Event Triggered!');
        sounds.hit.play();
        hpHitTrigger.fire();
        
        setRiveText("HPLabel",hp);
        /*
        if (hp <= 0){
            sounds.gameOver.play();
            hp = 0;
            setRiveText("HPLabel",hp);
            setRiveText("P1Label",username + " is dead");
            socket.emit('gameOver',{'username':username,'room':room});
        }
            */
        }
            
}

function resizeCanvas() {
    riveInstance.resizeDrawingSurfaceToCanvas();
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Call initially to set the size

socket.on('receiveLaser',data=>{
    console.log('Received laser data: ',data.damage);
   //var artboard= riveInstance.artboard("Main");
    riveInstance.fireStateAtPath('LaserIn','Shipscreen');
    hp -= data.damage;
    console.log('hp is now: ',hp);
});