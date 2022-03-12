const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

const bodyTag = document.querySelector('body');

let IntervalColorChange = null;

stopButton.disabled = true;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundChange = () => {
    bodyTag.style.backgroundColor = getRandomHexColor();
}


const startBackgroundChange = () => {
  startButton.disabled = true;
  stopButton.disabled = false;

  IntervalColorChange = setInterval(backgroundChange, 1000);
};   
    
const stopBackgroundChange = () => {
    stopButton.disabled = true;
    startButton.disabled = false;

    clearInterval(IntervalColorChange);
};   



startButton.addEventListener('click', startBackgroundChange);
stopButton.addEventListener('click', stopBackgroundChange);