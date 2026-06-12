import { startTimer, setTotalCycles, resetWorkTime } from './workTime.js';
import {startBreak} from "./breakTime.js";


let buttonBack = document.getElementById('back');
export let buttonStop = document.getElementById('stop');
let buttonNext = document.getElementById('next');
let audio = document.getElementById('audio');
const theme = document.getElementById('theme');


export function startWork() {
    resetWorkTime();
    buttonStop.addEventListener('click', () => {
        const cycles = Number(theme.value);
        setTotalCycles(cycles);
        startTimer();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
    
}
startWork();

