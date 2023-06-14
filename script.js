//start of timer stuff

// Timer variables
let time = 1500; // 25 minutes in seconds
let timerId;
let isRunning = false;

// Timer display element
const timerElement = document.getElementById("timer");

// Start button click event
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
    if (!isRunning) {
        const inputTime = document.getElementById("inputTime").value;
        if (inputTime) {
            time = inputTime * 60;
            updateTimerDisplay();
        }
        startTimer();
        isRunning = true;
        startButton.textContent = "Pause";
    } else {
        pauseTimer();
        isRunning = false;
        startButton.textContent = "Resume";
    }
});

// Reset button click event
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
    resetTimer();
});

// Break buttons click events
const breakButton5 = document.getElementById("breakButton5");
breakButton5.addEventListener("click", () => {
    startBreak(5);
});

const breakButton10 = document.getElementById("breakButton10");
breakButton10.addEventListener("click", () => {
    startBreak(10);
});

const breakButton15 = document.getElementById("breakButton15");
breakButton15.addEventListener("click", () => {
    startBreak(15);
});

// Timer logic
function startTimer() {
    timerId = setInterval(() => {
        if (time > 0) {
            time--;
            updateTimerDisplay();
            updateTitle(time);
        } else {
            clearInterval(timerId);
            timerElement.textContent = "Time's up!";
            isRunning = false;
            startButton.disabled = true;
            playSound();
        }
    }, 1000);
}

function startBreak(duration) {
    time = duration * 60;
    updateTimerDisplay();
    updateTitle(time);
    startTimer();
    isRunning = true;
    startButton.textContent = "Pause";
}

function pauseTimer() {
    clearInterval(timerId);
}

function resetTimer() {
    clearInterval(timerId);
    time = 1500;
    isRunning = false;
    startButton.textContent = "Start";
    updateTimerDisplay();
    updateTitle(time);
}

function updateTimerDisplay() {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    timerElement.textContent = `${minutes}:${seconds}`;
}

function updateTitle(time) {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    document.title = `(${minutes}:${seconds}) Pomodoro Timer`;
}

function playSound() {
    const audio = document.getElementById("completionSound");
    audio.play();
}

//end of timer stuff