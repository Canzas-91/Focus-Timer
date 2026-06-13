import { startTimer, currentCycle, totalCycles, nextCycle, resetWorkTime} from './workTime.js';
let breakTime = 301; // 5 minutes in seconds
let timerInterval = null;
const BREAK_DURATION = 301;

const time = document.getElementById('time');
const mode = document.getElementById('mode');
const buttonStop = document.getElementById('stop-icon');
const audio = document.getElementById('audio');

function Timer() {
    let minutes = Math.floor(breakTime / 60);
    if(minutes % 60 < 10){
        minutes = '0' + minutes % 60;
    }else{
        minutes = minutes % 60;
    }
    let remainingSeconds = breakTime % 60;
    if(remainingSeconds < 10){
        remainingSeconds = '0' + remainingSeconds;
    }
    if (breakTime === 0) {
        mode.textContent = 'Work Time';
    }
    time.textContent = `${minutes}:${remainingSeconds}`;
}

export function startBreak() {
    buttonStop.src = './assets/icon-start.svg';
    breakTime = BREAK_DURATION;
    if (timerInterval !== null) {
        buttonStop.src = './assets/icon-pause.svg';
        clearInterval(timerInterval);
        timerInterval = null;
        return;
    }
    timerInterval = setInterval(() => {
        if (breakTime === 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            if (currentCycle < totalCycles){
                nextCycle();
                resetWorkTime();
                startTimer();
            }else{
                audio.pause();
                audio.currentTime = 0;
            }
            return;
        }
        breakTime--;
        Timer();
    }, 1000);
}
