let timer;
let timeLeft = 0;
let timerRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const timeInput = document.getElementById('timeInput');
const soundSelect = document.getElementById('soundSelect');

function startTimer() {
  if (!timerRunning) {
    timeLeft = parseInt(timeInput.value) * 60;
    timerRunning = true;
    timer = setInterval(updateTimer, 1000);
    updateTimer();
  }
}

function stopTimer() {
  clearInterval(timer);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timerRunning = false;
  timeLeft = parseInt(timeInput.value) * 60;
  updateTimer();
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timer);
    timerRunning = false;
    timerDisplay.textContent = 'Time\'s up!';
    const audio = new Audio(soundSelect.value);
    audio.play();
  }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
