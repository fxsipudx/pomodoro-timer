document.addEventListener("DOMContentLoaded", function(){
    // Get references to timer display elements
    const minSpan = document.getElementById("min");
    const secSpan = document.getElementById("sec");
  
    // Timer variables
    let minutes = 25;
    let seconds = 0;
    let timer;
    let timerState = "Stopped";
  
    // Function to update timer display
    const updateTimerClock = function(){
        minSpan.textContent = String(minutes).padStart(2,"0");
        secSpan.textContent = String(seconds).padStart(2,"0");
    }
  
    // Function to reset timer
    const resetTimerClock = function(){
        clearInterval(timer);
        timerState = "Stopped";
        minutes = 25;
        seconds = 0;
        updateTimerClock();
    }
  
    // Function to pause timer
    const pauseTimerClock = function(){
        if(timerState === "Running"){
            clearInterval(timer);
            timerState = "Paused";
        }
    }
  
    // Function to start/resume timer
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
    // Initial update of timer display
    updateTimerClock();
  
    // Function to show add task elements
    const addTask = function(){
        console.log("addTask function called"); 
        const addtaskBox = document.getElementById("addtaskBox");
        addtaskBox.style.display = "flex";
        const taskinput = document.getElementById("task-input");
        taskinput.style.display = "block";
        const saveButton = document.getElementById("saveButton");
        saveButton.style.display = "block";
    }
    const saveTask = function(){
        const removetaskBox = document.getElementById("addtaskBox");
        removetaskBox.style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.id = "mainTaskList";
        document.getElementById("bigSection").appendChild(newDiv);

        const taskInput = document.getElementById("task-input").value;
        const newPara = document.createElement("p");
        newPara.textContent = taskInput;
        newDiv.appendChild(newPara);

        const newDeleteButton = document.createElement("button");
        newDeleteButton.textContent = "X";
        newDeleteButton.id = "deleteTask";
        newDiv.appendChild(newDeleteButton);

        document.getElementById("task-input").value = "";

        newDeleteButton.addEventListener("click", function() {
            bigSection.removeChild(newDiv);
        });

    }

   
  
  
  
    // Attach event listeners to buttons
    const startButton = document.getElementById("start").addEventListener("click",timerClock);
    const resetButton = document.getElementById("reset").addEventListener("click",resetTimerClock);
    const pauseButton = document.getElementById("pause").addEventListener("click",pauseTimerClock);
    const addTaskButton = document.getElementById("addTaskButton").addEventListener("click",addTask);
    const saveButton = document.getElementById("saveButton").addEventListener("click",saveTask);
  
  
  });
  