// Напиши скрипт, который при сабмите формы вызывает
//  функцию createPromise(position, delay) столько раз,
// сколько ввели в поле amount.
// //  При каждом вызове передай ей номер создаваемого промиса (position)
// //  и задержку учитывая введенную пользователем первую задержку (delay)
// и шаг (step).

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-aio-3.2.5.min.js';
console.log(Notify);

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onformElSubmit);

function onformElSubmit(evt) {
  evt.preventDefault();

  const firstDelay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const amount = Number(evt.currentTarget.elements.amount.value);

  for (let i = 0; i <= amount - 1; i += 1) {
    const position = i + 1;
    const delay = firstDelay + step * i;

    function makePromise(position, delay) {
      const promise = new Promise((res, rej) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
          if (shouldResolve) {
            res({ position, delay });
          } else {
            rej({ position, delay });
          }
        }, delay);
      });
      return promise;
    }

    makePromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        formEl.reset();
      });
  }
}
