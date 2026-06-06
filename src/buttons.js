import { startTimer } from "./workTime.js";

let buttonBack = document.getElementById('back');
let buttonStop = document.getElementById('stop');
let buttonNext = document.getElementById('next');

export function startWork() {
    buttonStop.addEventListener('click', () => {
        startTimer();
    });

}
startWork();