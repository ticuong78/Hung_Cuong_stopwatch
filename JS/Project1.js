let intervalID;
let isPlaying = false;

const time = {
  hour: 0,
  minute: 0,
  second: 0
}

const timer = document.querySelector('.js-timer');
const stopButton = document.querySelector('.js-stop');
const resetButton = document.querySelector('.js-reset');

function showTime (){
  let hour = time.hour, minute = time.minute, second = time.second;

  if(time.hour < 10){
    hour = `0${time.hour}`
  }

  if(time.minute < 10){
    minute = `0${time.minute}`
  }

  if(time.second < 10){
    second = `0${time.second}`
  }

  timer.innerHTML = `${hour}:${minute}:${second}`;
}

showTime();

const start = () => {
  intervalID = setInterval(() => {
    if(time.second === 59){
      time.minute++;
      time.second = 0;
      if(time.minute === 60){
        time.hour++;
        time.minute = 0;
      }
    } else time.second++;
    showTime();
  }, 1000);
}

stopButton.addEventListener('click', () => {
  if(isPlaying === false){
    start();
    stopButton.innerText = 'Stop';
    isPlaying = true;
  }else{
    stopButton.innerText = 'Play';
    isPlaying = false;
    clearInterval(intervalID);
  }
})

resetButton.addEventListener('click', () => {
  time.hour = 0;
  time.minute = 0;
  time.second = 0;
  showTime();
  if(isPlaying === true){
    clearInterval(intervalID);
    console.log('cleared');
    start();
  }
})