function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStop.disabled = true;
let timerId = null;

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  timerId = setInterval(chehgeColor, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}
function chehgeColor() {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
}

btnStop.addEventListener('click', onBtnStopClick);

function onBtnStopClick() {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
