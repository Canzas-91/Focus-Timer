import {startBreak} from "./breakTime.js";

// с константами небольшой беспорядок, их лучше было бы причесать как-нибудь так
const WORK_DURATION = 60 * 25; // 25 minutes in seconds - теперь очевидно что это 25 минут
export let workTime = WORK_DURATION; 

let timerInterval = null; // Это очень хорошо, работа с таймерами на 5+
export let totalCycles = 1;
export let currentCycle = 1;


const time = document.getElementById('time');
const mode = document.getElementById('mode');
const buttonStop = document.getElementById('stop-icon');

// Функция для установки общего количества циклов
// Тут норм, установка циклов логически рассуждая может быть любой положительной, поэтому доп-правила на setter не нужны
export function setTotalCycles(value) {
    totalCycles = value;
}



/* 
    Названия функций принято писать с маленькой буквы, updateTimerElement, например
    + в breakTime.js есть код, который делает то же самое. Стоит их либо объединить, 
    либо вынести в отдельный файл и переиспользовать, потом замучаешься править одно и то же в нескольких местах
*/
// Функция для обновления отображения времени.
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
export function resetWorkTime() {
    workTime = WORK_DURATION;
}

// Функция для запуска таймера
export function startTimer() {
    /* 
        UI-moment: кнопка по идее отображает что она сделает, поэтому иконки стоит поменять местами.
        Чекни как это сделать в других плеерах - в VK, YouTube и пр

        Логическая ошибка функции в том, что она отвечает и за stop, и за start. 
        Чекни в buttons.js, я оставил коммент по слипшейся функциональности.
    */

    buttonStop.src = './assets/icon-pause.svg';
    if (timerInterval !== null) {
        buttonStop.src = './assets/icon-start.svg';
        clearInterval(timerInterval);
        timerInterval = null;
        return; 
    }
    workTime = WORK_DURATION;

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
};

export function nextCycle() {
    currentCycle++;
}


