let workTime = 1500; // 25 minutes in seconds
let timerInterval = null;

const time = document.getElementById('time');
const mode = document.getElementById('mode');

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
        clearInterval(timeInterval);
        mode.textContent = 'Break Time';
    }
    time.textContent = `${minutes}:${remainingSeconds}`;
}

export function startTimer() {
    if (timerInterval !== null) {
    return;
  }
    timerInterval = setInterval(() => {
        if (workTime === 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        mode.textContent = 'Break Time';
        return;
        }
        workTime--;
        Timer();
    }, 1000);
}



