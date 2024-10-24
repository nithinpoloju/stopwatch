const clock = document.getElementById("clock");
const saveClock = document.getElementById("save-clock");
let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;
let flagcounter = 0;
document.addEventListener('keydown', (event) => {
    if(event.key === 's') start();
    if(event.key === 'p') stop(); 
    if(event.key === 'r') reset();
    if(event.key === 'f') flag();
});

function start(){
    if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
    }
}

function  stop(){
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
    }

}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    clock.textContent =  "00:00:00:00";
    saveClock.textContent = '';
    flagcounter = 0;
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime / 60000) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}

function flag(){
    flagcounter++;
    const newEntry = document.createElement("p");
    newEntry.textContent = `${flagcounter}.  ${clock.textContent}`;
    saveClock.appendChild(newEntry);

}
