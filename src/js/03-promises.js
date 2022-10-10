import { Notify } from 'notiflix';

const form = document.querySelector('.form')

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', onInputsFilling)

let formData = {};

function onInputsFilling(evt) {
  formData[evt.target.name] = evt.target.value;
}

function onFormSubmit(evt) {
  evt.preventDefault()

  let delay = Number(formData.delay)
  const step = Number(formData.step)
  let amount = Number(formData.amount)

  for (let position = 1; position <= amount; position += 1) {

    createPromise(position, delay)
      .then(result => {
        Notify.success(result);
      })
      .catch(result => {
        Notify.failure(result);
      });

    delay += step;
  }

  // evt.currentTarget.reset();
}

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }

        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }, delay);
    });
  }

