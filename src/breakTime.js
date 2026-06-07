let breakTime = 10; // 5 minutes in seconds
let timerInterval = null;

const time = document.getElementById('time');
const mode = document.getElementById('mode');
const buttonStop = document.getElementById('stop-icon');

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
            return;
        }
        breakTime--;
        Timer();
    }, 1000);
}
