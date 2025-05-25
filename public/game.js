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
let timeoutId;
const damageCountTimeout = 3000; //ms for damage cleartimeout
let damageCountTimer ;
let hitTrigger;
let roomName = 'Z1X0';
let dmgIndicatorBool;

let targetInputsLeft =[];
let targetInputsRight = [];
let targetBool = false;


setTimeout(()=>{
    let iframeBG = document.getElementById('iframeBG');
    let iframeDocument = iframeBG.contentDocument || iframeBG.contentWindow.document;
    let splineLogo = iframeDocument.getElementsByClassName('spline-watermark');
    console.log(splineLogo[0]);
    splineLogo.remove();
},1000);

//splineLogo[0].remove();

const loginData = Qs.parse(location.search,{
    ignoreQueryPrefix : true
});
if (loginData.username != undefined) { // if we are offline, ignore
username = loginData.username;
room = loginData.roomId;
roomName = room;
hp = parseInt(loginData.initialHealth,10);
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
      //setRiveText('DamageCount','');
      hitTrigger = inputs.find((input) => input.name === "Hit");
      dmgIndicatorBool = inputs.find((input)=> input.name === "DmgIndicator");
      randomTargetButtonChange(1); //start the random button flickering animations
    console.log('found all triggers');
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
    else if(eventData.name == 'hpOn'){
        fillHP();
    }
    else if (eventData.name =='ShieldUpEvent'){
        ShieldUp();
    }
    else if(eventData.name == 'ShieldDownEvent'){
        ShieldDown();
    }
    else if (eventData.name == 'ReticleHoverOn'){
        console.log('reticleHover');
        sounds.reticleHoverOn.play();
    }
    
    else if (eventData.name == 'ReticleHoverOff'){
        sounds.reticleHoverOff.play();
    }
    else if (eventData.name == 'ShieldHoverOn'){
        sounds.shieldHoverOn.play();
    }
    else if (eventData.name == 'ShieldHoverOff'){
        sounds.shieldHoverOff.play();
    }
    else if (eventData.name == 'hpHover'){
        sounds.hpHoverOn.play();
    }

}


//Socket Logic
socket.on('receiveLaser',data=>{
    console.log('Received laser data: ',data.damage);
    let hitTimeout = setTimeout(()=>Hit(data.damage),700);
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

    targetBool = !targetBool;
    //toggleTargetButtons(0,targetBool);
    //riveInstance.setBooleanStateAtPath('On',true,'FireBoard/Matrix1/TargetingButton16');

    targetingPatternAnimate();
    addDamageCount();
    playRandomSound(sounds.lasSoundList);
        socket.emit('fireLaser',{'username':username,'room':room,'damage':laserDamage});
    
}


//targeting pattern functions
function toggleTargetButtons(num,thisBool,side){
// 1:left, 2:right, 3:both
        if(side==0||side==3){
        riveInstance.setBooleanStateAtPath('On',thisBool,`FireBoard/Matrix1/TargetingButton${num}`);
        }
        if(side==1||side==3){
        riveInstance.setBooleanStateAtPath('On',thisBool,`FireBoard/Matrix2/TargetingButton${num}`);
        }
}

function targetingPatternAnimate(){
    const vertical=[[9,14],[4,8,13,18],[3,7,12,17],[2,6,11,16],[1,5,10,15]];

    for (var i =0; i<vertical.length;i++){
        vertical[i].forEach((item)=>{
          setTimeout(()=>{toggleTargetButtons(item,true,3)},(i+1)*10);
          setTimeout(()=>{toggleTargetButtons(item,false,3)},(i+1)*(220-(i*10)));
        })
    }
}
function randomTargetButtonChange(index){
    let sideNum = Math.floor(Math.random() * 2);
    let ranIndex = randomIntRange(1,17);
    let onOffRan = Math.floor(Math.random() * 2);
        if (onOffRan == 1){onOffRan =true;}
        else{onOffRan = false;}
    toggleTargetButtons(index,onOffRan,sideNum); // turn off or on a random button, then set up the timer for the next one
    setTimeout(()=>{randomTargetButtonChange(ranIndex)},300);
}


function randomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function Hit(damage){
    hp -= damage;  //Deal Damage
    hitTrigger.fire(); //Signal Rive File to play hit Animation
    playRandomSound(sounds.hitSoundList);
    setRiveText("HP",hp.toString());  //update HP Text
    console.log('hp is now: ',hp);
        
}
function ShieldUp(){
    
    hp = hp + 1;
    setRiveText("HP",hp.toString());
    sounds.shield1.play();
    console.log('shield Up!'+ hp);
}
function ShieldDown(){
    hp = hp - 1;
    console.log('shield Down!');
    setRiveText("HP",hp.toString());
    sounds.shieldDown.play();
    
}

function addDamageCount(){
    clearTimeout(timeoutId);
    timeoutId = setTimeout(damageCountClear, damageCountTimeout);
    damageCount +=1;
    setRiveText('DamageCount',`+[${damageCount}]`);
    dmgIndicatorBool.value = true;
}

function damageCountClear(){
    damageCount =0;
    console.log('cleared');
    //setRiveText('DamageCount','');
    dmgIndicatorBool.value = false;
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