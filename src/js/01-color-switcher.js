const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body')
};

refs.startBtn.addEventListener('click', onStartClick)
refs.stopBtn.addEventListener('click', onStopClick)

let inervalId = null;

function onStartClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  inervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor()
  }, 1000)

  refs.startBtn.setAttribute('disabled', '')
  refs.stopBtn.removeAttribute('disabled');
}

function onStopClick() {
  clearInterval(inervalId);

  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

