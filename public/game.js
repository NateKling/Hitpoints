console.log('connected');
console.log('v 0.05');

import van from "vanjs-core";
const {a,div,li,p,ul,img} = van.tags;
const rive= require ('@rive-app/canvas');
import { Rive, EventType, RiveEventType } from '@rive-app/canvas';
const sounds = require('./utils/sounds.js');
const qs = require('qs');
import {Howl,Howler} from 'howler';

//var lasSound = new Howl({ src:[new URL('assets/sounds/weapon_laser_009.wav',import.meta.url)],html5:true});
//var hitSound = new Howl({ src:[new URL('assets/sounds/explosion_small_015.wav',import.meta.url)],html5:true});


import { io } from "socket.io-client";
import CONFIG from "./utils/config.js";
const socket = io(CONFIG.SOCKET_URL);
//const socket = io('http://localhost:3000');

//alert(CONFIG.SOCKET_URL);
const hitpointsRive = './assets/rive/hitpoints_core.riv';

const canvas = document.createElement('canvas');
canvas.width = 130;
canvas.height = 320;
document.body.appendChild(canvas);

let username='user';
let room='';
let targetName = '';

let hp = 100;
let displayHP = 0;
let laserDamage = 1;
let damageCount = 0;
const damageCountTimeout = 2000; //ms for damage cleartimeout
let damageCountTimer ;
let hitTrigger;
let roomName = 'Z1X0'

const loginData = Qs.parse(location.search,{
    ignoreQueryPrefix : true
});
if (loginData.username != undefined) { // if we are offline, ignore
username = loginData.username;
room = loginData.roomId;
roomName = room;
hp = loginData.initialHealth;
targetName = ' ';
}

//Gameplay Variables

socket.emit('joinRoom',{'username':username,'room':room});

const riveInstance = new rive.Rive({
    src: new URL('./assets/rive/hitpoints_core.riv',import.meta.url),
    canvas: canvas,
    autoplay: true,
    artboard: "Main", // Optional. If not supplied the default is selected
    stateMachines: "Main_StateMachine",
   
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
      const inputs = riveInstance.stateMachineInputs("Main_StateMachine");
      
      // Set Initial States and Grab References to Triggers
      //setRiveText("HP",hp.toString());
        setRiveText("HP",'0');
      setRiveText("RoomID",'ROOM '+ roomName);
      setRiveText("TargetName",'TARGET: '+targetName);
      hitTrigger = inputs.find((input) => input.name === "Hit");
      PowerOn();
      
    },
});
function resizeCanvas() {
    riveInstance.resizeDrawingSurfaceToCanvas();
}
//Rive Setup
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Call initially to set the size
riveInstance.on(EventType.RiveEvent,onRiveEventReceived);

//Rive Util
function setRiveText(runName,text)
{
    riveInstance.setTextRunValue(runName, text);
}
function onRiveEventReceived(riveEvent) {
    const eventData = riveEvent.data;
    console.log('Recieved Rive Event!: ',eventData.name);
    if (eventData.name == 'FireEvent'){
        Fire();
    }
    if(eventData.name == 'hpOn'){
        fillHP();
    }
}


//Socket Logic
socket.on('receiveLaser',data=>{
    console.log('Received laser data: ',data.damage);
    Hit(data.damage);
});

socket.on('userJoined',data=>{
    console.log(`user joined room. welcome , ${data.username}`);
    targetName = data.username;
    setRiveText('TargetName','TARGET '+data.username);
    sounds.playerJoin.play();
})
socket.on('roomData',data=>{
    console.log('recieved room data');
    targetName = data.player1; //gets set later when rive loads
    //setRiveText('TargetName','TARGET '+data.player1);
})


//Gameplay Functions

function PowerOn(){
    sounds.powerOn.play();
}

function Fire(){
    //sounds.laser1.play();
    //sounds.las.play();
    addDamageCount();
    playRandomSound(sounds.lasSoundList);
        socket.emit('fireLaser',{'username':username,'room':room,'damage':laserDamage});
}

function Hit(damage){
    hp -= damage;  //Deal Damage
    hitTrigger.fire(); //Signal Rive File to play hit Animation
    playRandomSound(sounds.hitSoundList);
    setRiveText("HP",hp.toString());  //update HP Text
    console.log('hp is now: ',hp);
        
}
function ShieldUp(){
    console.log('shield Up!');
    hp +=1;
    sounds.shield1.play();
}
function ShieldDown(){
    console.log('shield Down!');
}

function addDamageCount(){
    clearTimeout(damageCountTimer);
    timeoutId = setTimeout(damageCountClear, damageCountTimeout);
    damageCount +=1;
    setRiveText(DamageCount,`DAMAGE: [${damageCount}]`);
}

function damageCountClear(){
    damageCount =0;
    setRiveText('DamageCount','[]');
}

function fillHP(){ //hp fill animation that plays at the beginning
  if (displayHP<hp){
    displayHP +=1;
    setRiveText("HP",displayHP.toString());
    setTimeout(() => {
        fillHP();
    }, 10);
  }
}

function playRandomSound(soundList){
    //accepts an array of howler sound objects
    let randomIndex = Math.floor(Math.random() * (soundList.length));
    soundList[randomIndex].rate = Math.random() *1.4;
    soundList[randomIndex].play();
    
}


/*
//IMPORTANT RIVE NOTES
    riveInstance.fireStateAtPath('LaserIn','Shipscreen');  //fires a trigger on a nested artboard ('triggername','artboardname')
    hitTrigger = inputs.find((input) => input.name === "Hit");  // grab reference to trigger to later use with hitTrigger.fire() , name must be set as 'export' in the riv file
    
    riveInstance.on(EventType.RiveEvent,onRiveEventReceived);  //Sets up a listener for event triggers, assign a callback method (example:onRiveEventRecieved)

*/