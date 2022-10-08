import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

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


refs.input.addEventListener('click', onInputClick)

function onInputClick(evt) {
  const pickr = new flatpickr('#datetime-picker', flatpickrOptions);
  console.log(pickr);
}
