import {startTimer } from "./workTime.js";
import {startBreak} from "./breakTime.js";
import {workTime} from "./workTime.js";

let buttonBack = document.getElementById('back');
export let buttonStop = document.getElementById('stop');
let buttonNext = document.getElementById('next');

export function startWork() {
    buttonStop.addEventListener('click', () => {
        startTimer();
    });
}
startWork();

