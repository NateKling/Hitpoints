import {Howl,Howler} from 'howler';

/*
export const hey = new Audio( new URL('../assets/sounds/hey.wav',import.meta.url));
export const squish = new Audio( new URL('../assets/sounds/squish.wav',import.meta.url));
export const laser1 = new Audio( new URL('../assets/sounds/weapon_laser_009.wav',import.meta.url));
export const hit = new Audio( new URL('../assets/sounds/explosion_small_015.wav',import.meta.url));
export const powerOn = new Audio( new URL('../assets/sounds/PowerOnSound1.mp3',import.meta.url));
*/


export var las = new Howl({ src:[new URL('../assets/sounds/weapon_laser_009.wav',import.meta.url)],html5:true});
export var hit = new Howl({ src:[new URL('../assets/sounds/explosion_small_015.wav',import.meta.url)],html5:true});
export var powerOn = new Howl({ src:[new URL('../assets/sounds/PowerOnSound1.mp3',import.meta.url)],html5:true});
