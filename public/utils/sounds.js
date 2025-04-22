import {Howl,Howler} from 'howler';

/*
export const hey = new Audio( new URL('../assets/sounds/hey.wav',import.meta.url));
export const squish = new Audio( new URL('../assets/sounds/squish.wav',import.meta.url));
export const laser1 = new Audio( new URL('../assets/sounds/weapon_laser_009.wav',import.meta.url));
export const hit = new Audio( new URL('../assets/sounds/explosion_small_015.wav',import.meta.url));
export const powerOn = new Audio( new URL('../assets/sounds/PowerOnSound1.mp3',import.meta.url));
*/


export var las1 = new Howl({ src:[new URL('../assets/sounds/weapon_laser_009.wav',import.meta.url)],html5:true});
export var las2 = new Howl({ src:[new URL('../assets/sounds/weapon_laser_007.wav',import.meta.url)],html5:true});
export var las3 = new Howl({ src:[new URL('../assets/sounds/weapon_laser_008.wav',import.meta.url)],html5:true});
export var hit1 = new Howl({ src:[new URL('../assets/sounds/explosion_small_003.wav',import.meta.url)],html5:true});
export var hit2 = new Howl({ src:[new URL('../assets/sounds/explosion_small_006.wav',import.meta.url)],html5:true});
export var hit3 = new Howl({ src:[new URL('../assets/sounds/explosion_small_011.wav',import.meta.url)],html5:true});
export var hit4 = new Howl({ src:[new URL('../assets/sounds/explosion_small_014.wav',import.meta.url)],html5:true});
export var hit5 = new Howl({ src:[new URL('../assets/sounds/explosion_small_015.wav',import.meta.url)],html5:true});
export var hit6 = new Howl({ src:[new URL('../assets/sounds/explosion_small_016.wav',import.meta.url)],html5:true});

export var powerOn = new Howl({ src:[new URL('../assets/sounds/PowerOnSound1.mp3',import.meta.url)],html5:true});

export var playerJoin = new Howl({ src:[new URL('../assets/sounds/gui_023.wav',import.meta.url)],html5:true});

export var shield1 = new Howl({ src:[new URL('../assets/sounds/shield_up_001.wav',import.meta.url)],html5:true});



export var lasSoundList = [las1,las2,las3];
export var hitSoundList = [hit1,hit2,hit3,hit4,hit5,hit6];