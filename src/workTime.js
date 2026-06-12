import {startBreak} from "./breakTime.js";

export let workTime = 1500; // 25 minutes in seconds
let timerInterval = null;
export let totalCycles = 1;
let currentCycle = 1;
const WORK_DURATION = 5;


const time = document.getElementById('time');
const mode = document.getElementById('mode');
const buttonStop = document.getElementById('stop-icon');

// Функция для обновления отображения времени
function Timer() {
    let minutes = Math.floor(workTime / 60);
    if(minutes % 60 < 10){
        minutes = '0' + minutes % 60;
    }else{
        minutes = minutes % 60;
    }
    let remainingSeconds = workTime % 60;
    if(remainingSeconds < 10){
        remainingSeconds = '0' + remainingSeconds;
    }
    if (workTime === 0) {
        mode.textContent = 'Break Time';
    }
    time.textContent = `${minutes}:${remainingSeconds}`;
}

// Функция для запуска таймера
export function startTimer() {
    buttonStop.src = './assets/icon-start.svg';
    if (timerInterval !== null) {
        buttonStop.src = './assets/icon-pause.svg';
        clearInterval(timerInterval);
        timerInterval = null;
        return;
    }
    timerInterval = setInterval(() => {
        if (workTime === 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            startBreak();
            return;
        }
        workTime--;
        Timer();
    }, 1000);
}


