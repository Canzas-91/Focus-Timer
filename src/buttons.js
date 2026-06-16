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
        /* 
            У тебя startTimer отвечает и за startTimer, и за stopTimer.
            Пока проект маленький, это не проблема, но я посоветовал разделять эту функциональность.
            В более сложном проекте сразу несколько событий/функций/сценариев могут приводить к остановке таймера +
            ты всегда должен держать в голове что воспроизведение плеера запущено/остановлено и с этим тяжелее работать,
            нежели с двумя функциями, которые приводят к одному ожидаемому результату - stop и start
        */
        startTimer();
        if (audio.paused) {
            audio.play();
            // startTimer(); // <---- более очевидное поведение плеера
        } else {
            audio.pause();
            // stopTimer() // <---- более очевидное поведение плеера
        }
    });
    
}
startWork();

/*
    Возможно пока чуть рано говорить о грамотном названии функций, но я сделаю небольшой вброс.
    Название функции должно отображать что делает функция, чтобы потом понятнее было разбираться в коде.
    Этот навык приходит со временем и возможно с прочтение книги "Чистый код". Тебе пока не обязательно ее читать, мб потом
    Просто старайся чуть более осмысленно называть функции, например:

    export function subscribeForwardFiveSecond(){
    ИЛИ
    export function initButtonNextListener(){

    Повторюсь, не зацикливайся сильно на названии сейчас, просто попробуй начинать названия функций с глагола
    function init... - тут может быть что угодно для первого запуска приложения - подписки addEventListener, присвоение первичных значений
    function start... - запускает что-то типо таймера, процесса и тд
    function run... - то же что и start
    function check... - какая-нибудь хитрая проверка, которая возвращает bool
    function subscribe... - если привязываешь функцию к кнопке
    function click... - если бы ты выносил callback для addEventListener в отдельную функцию

    function clickButtonNext() {
        audio.currentTime += 5;
    }

    function initButtonNextListener(){
        buttonNext.addEventListener('click', clickButtonNext)
    }
*/
export function forwardFiveSecond(){
    buttonNext.addEventListener('click', () => {
        audio.currentTime += 5;
    })
}
forwardFiveSecond()

export function backwardFiveSecond(){
    buttonBack.addEventListener('click', () => {
        audio.currentTime -= 5;
    })
}
backwardFiveSecond()