const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// variable for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// variable for set interval & timer status
let timerInterval = null;
let timerStatus = 'stopped';

// padding function to add 0 to the time values
const padding = (time) => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  document.getElementById('timer').innerText = `${padding(hours)}:${padding(minutes)}:${padding(seconds)}`;
}
// window.setInterval(stopWatch, 1000);


// using the startButton and resetButton
startStopBtn.addEventListener('click', () => {
  if (timerStatus === 'stopped') {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById('startStopBtn').innerHTML = '<i class="fa fa-pause" id="pause"></i>';   
    timerStatus = 'started';
  } else {
    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = '<i class="fa fa-play" id="play"></i>';
    timerStatus = 'stopped';
  }
});

resetBtn.addEventListener('click', () => {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('timer').innerHTML = '00:00:00';
  document.getElementById('startStopBtn').innerHTML = '<i class="fa fa-play" id="play"></i>';
  timerStatus = 'stopped';
});