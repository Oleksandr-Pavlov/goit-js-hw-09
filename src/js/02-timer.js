import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let selectedTime = null;

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        position: 'center-center',
      });
      refs.startBtn.disabled = true;
    } else {
      Notiflix.Notify.success('Great! Now you can press start button', {
        position: 'center-center',
      });
      refs.startBtn.disabled = false
      selectedTime = selectedDates[0].getTime();
    }
    
  } 
};

const refs = {
  input: document.querySelector('input'),
  startBtn: document.querySelector('button'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.startBtn.disabled = true;

flatpickr('#datetime-picker', flatpickrOptions);

function onStartBtnClick() {
  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedTime - currentTime;
    const timerComponents = convertMs(deltaTime);

    updateTimer(timerComponents);

    if (deltaTime < 1000) {
      clearInterval(timerId)
    }
  }, 1000)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days/ hours/ mins/ secs
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimer({days, hours, minutes, seconds}) {
  refs.days.textContent = `${ days }`;
  refs.hours.textContent = `${ hours }`;
  refs.minutes.textContent = `${ minutes }`;
  refs.seconds.textContent = `${seconds}`;
}

