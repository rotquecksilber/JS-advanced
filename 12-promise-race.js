'use strict';

// Промис, который успешно завершается через 2 секунды
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 1 resolved'), 2000);
});

// Промис, который успешно завершается через 3 секунды
const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 2 resolved'), 3000);
});

// Промис, который отклоняется с ошибкой через 1 секунду
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise 3 rejected')), 1000);
});

// Промис, который успешно завершается через 4 секунды
const promise4 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 4 resolved'), 4000);
});

// Функция race, которая вернет первый успешный или отклоненный промис
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}

const promisesArray = [promise1, promise2, promise3, promise4];


race(promisesArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));