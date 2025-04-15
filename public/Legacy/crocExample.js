console.log('connected');
import van from "vanjs-core";
const {a,div,li,p,ul,img,button} = van.tags;
const rive= require ('@rive-app/canvas');
import { Rive, EventType, RiveEventType } from '@rive-app/canvas';
const logo = new URL('./assets/baby.png',import.meta.url);
console.log(logo);

const sounds = require('/sounds.js');

//const audio_hey = new Audio( new URL('./assets/hey.wav',import.meta.url));


const canvas = document.createElement('canvas');
canvas.style = 'position:sticky;z-index:10;top:20px;';
canvas.width = 200;
canvas.height = 200;
document.body.appendChild(canvas);

let currentScroll =0;

van.add(document.body, div({style:'height:3000px;width: 100%;'},''));

// Function to calculate the scroll percentage
function calculateScrollPercentage() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // Current vertical scroll position
    
    const scrollHeight = document.documentElement.scrollHeight ; // Total scrollable height
    console.log(scrollTop ," / ", scrollHeight);
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Scroll percentage calculation
    console.log('scroll Percentage: ' + scrollPercentage);
   // return Math.min(Math.max(scrollPercentage, 0), 100); // Clamped to 0-100 range
   return scrollPercentage;
}


let stateMachineScrollInput;
let blinkInput;

const riveInstance = new rive.Rive({
    src: new URL('./assets/croc.riv',import.meta.url),
    canvas: canvas,
    autoplay: true,
    // artboard: "Arboard", // Optional. If not supplied the default is selected
    stateMachines: "State Machine 1",
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
      const inputs = riveInstance.stateMachineInputs("State Machine 1");
      //get Inputs to adjust later
        stateMachineScrollInput = inputs.find(i => i.name === 'Rise From Water');
        blinkInput = inputs.find(i=>i.name ==='Blink');
    },
});

function onRiveEventReceived(riveEvent) {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
    console.log('Recieved Rive Event!: ',eventData.name);
    if (eventData.name == 'talkEvent'){
        sounds.hey.play();
    }
    
}
riveInstance.on(EventType.RiveEvent,onRiveEventReceived); //Sets up a listener on our rive instance and connects it to recieving function

document.onscroll = () => {    
    const scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        stateMachineScrollInput.value = scrollPercentage;
    };

function triggerBlink(){
    console.log('triggering blink');
    blinkInput.fire();
    sounds.squish.play();
}

const blinkButton = div(button({onclick:triggerBlink},'BLINK'));
van.add(document.body,blinkButton);