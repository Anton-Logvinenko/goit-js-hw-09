import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysX = document.querySelector('[data-days]');
const hoursX = document.querySelector('[data-hours]');
const minutesX = document.querySelector('[data-minutes');
const secondsX = document.querySelector('[data-seconds');

startBtn.disabled = true;

const fp = flatpickr(inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    const endDate = selectedDates[0];

    console.log(endDate);

    if (endDate <= new Date()) {
      return window.alert('Please choose a date in the future');
    }
    startBtn.disabled = false;

    // запуск отсчета времени
    startBtn.addEventListener('click', onStartBtnClick);
    function onStartBtnClick() {
      const timerId = setInterval(() => {
        const currentDay = new Date();
        const timeShow = endDate - currentDay;
        console.log(timeShow);

        // Выключаем таймер если остается менее 1000 мс,
        // если  поставить ноль будет отрицательная секунда
        if (timeShow < 1000) {
          clearInterval(timerId);
          startBtn.disabled = true;
        }
        function convertMs(ms) {
          // Number of milliseconds per unit of time
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(ms / day);

          const hours = Math.floor((ms % day) / hour);

          const minutes = Math.floor(((ms % day) % hour) / minute);

          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          const timeX = { days, hours, minutes, seconds };

          daysX.textContent = timeX.days.toString().padStart(2, 0);
          hoursX.textContent = timeX.hours.toString().padStart(2, 0);
          minutesX.textContent = timeX.minutes.toString().padStart(2, 0);
          secondsX.textContent = timeX.seconds.toString().padStart(2, 0);
          return timeX;
        }
        convertMs(timeShow);
        console.log(convertMs(timeShow));
      }, 1000);
    }
  },
});
