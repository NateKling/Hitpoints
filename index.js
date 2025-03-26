console.log('connected');
import van from "vanjs-core";
const {a,div,li,p,ul,img} = van.tags;
const rive= require ('@rive-app/canvas');
const logo = new URL('./assets/baby.png',import.meta.url);
console.log(logo);

/*
const imgElement = document.createElement('img');
imgElement.src = logo;
//imgElement.src = logo;
document.body.appendChild(imgElement);
*/

const canvas = document.createElement('canvas');
canvas.style = 'position:sticky;z-index:10;top:20px;';
canvas.width = 200;
canvas.height = 200;
document.body.appendChild(canvas);

let currentScroll =0;

van.add(document.body, div({style:'height:3000px;width: 100%;'},'vvvvvvvvvvvvvvvvvv'));

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

const riveInstance = new rive.Rive({
    src: new URL('./assets/croc.riv',import.meta.url),
    //src: "https://cdn.rive.app/animations/vehicles.riv",
    // OR the path to a discoverable and public Rive asset
    // src: '/public/example.riv',
    canvas: canvas,
    autoplay: true,
    // artboard: "Arboard", // Optional. If not supplied the default is selected
    stateMachines: "State Machine 1",
    

    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
      const inputs = riveInstance.stateMachineInputs("State Machine 1");

      //get Inputs to adjust later
        stateMachineScrollInput = inputs.find(i => i.name === 'Rise From Water');
            
    },
});

/*
window.addEventListener('scroll', () => {
    stateMachineScrollInput.value = calculateScrollPercentage();
    
});
*/

document.onscroll = () => {    
    const scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        stateMachineScrollInput.value = scrollPercentage;
    };