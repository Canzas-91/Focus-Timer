import {startTimer } from "./workTime.js";
import {startBreak} from "./breakTime.js";
import {workTime} from "./workTime.js";

let buttonBack = document.getElementById('back');
export let buttonStop = document.getElementById('stop');
let buttonNext = document.getElementById('next');
let audio = document.getElementById('audio');

export function startWork() {
    buttonStop.addEventListener('click', () => {
        startTimer();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
    
}
startWork();

