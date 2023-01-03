import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');

inputEl.addEventListener('input', onInputEl);

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
  },
});

let endDate = null;
function onInputEl() {
  endDate = new Date(inputEl.value);

  console.log('внутри функции', endDate);
  return endDate;
}
onInputEl();
console.log('глобальная видимость', endDate);

// const currentDay = new Date();
// let Q = endDate - currentDay;

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);

//   const hours = Math.floor((ms % day) / hour);

//   const minutes = Math.floor(((ms % day) % hour) / minute);

//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
// console.log(convertMs(ms));
// console.log(convertMs(enableTime)); // {days: 0, hours: 0, minutes: 0, seconds: 2}

// let x = 0;
// function qq() {
//   x = 10 + 20;
// }
// qq();
// console.log(x);
