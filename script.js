const minSpan = document.getElementById("min");
const secSpan = document.getElementById("sec");


let minutes = 25;
let seconds = 0;
let timer;
let timerState = "Stopped";

const updateTimerClock = function(){
    minSpan.textContent = String(minutes).padStart(2,"0");
    secSpan.textContent = String(seconds).padStart(2,"0");
}

const resetTimerClock = function(){
    clearInterval(timer);
    timerState = "Stopped";
    minutes = 25;
    seconds = 0;
    updateTimerClock();
}

const pauseTimerClock = function(){
    if(timerState === "Running"){
        clearInterval(timer);
        timerState = "Paused";
        
    }
}

const timerClock = function(){
    if((timerState === "Stopped") || (timerState === "Paused")){
        timerState = "Running";
        timer = setInterval(function(){
            if(seconds === 0){
                if (minutes > 0){
                    minutes -= 1;
                    seconds = 59;
                }else if(minutes===0){
                    resetTimerClock();
                }
            }else{
                seconds -= 1;
            }
            updateTimerClock();
        },1000);

    }
    
   

}
updateTimerClock();

const startButton = document.getElementById("start").addEventListener("click",timerClock);
const resetButton = document.getElementById("reset").addEventListener("click",resetTimerClock);
const pauseButton = document.getElementById("pause").addEventListener("click",pauseTimerClock);

