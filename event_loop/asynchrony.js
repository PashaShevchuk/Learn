// Как работает асинхронность в JavaScript
// https://www.youtube.com/watch?v=LjrtNkFIWqI

// console.log('Beginning');
//
// setTimeout(() => {
//   console.log('Timeout');
// }, 0);
//
// console.log('Before promise');
//
// new Promise(resolve => {
//   console.log('In promise');
//
//   resolve();
// })
//   .then(() => {
//     console.log('Promise then');
//   })
//   .then(() => {
//     console.log('Promise then 2');
//   });
//
// console.log('Finish');
//
// Beginning
// Before promise
// In promise
// Finish
// Promise then
// Promise then 2
// Timeout

console.log('Beginning');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('Before promise');

new Promise(resolve => {
  setTimeout(() => {
    console.log('In promise');

    resolve();
  }, 0);
})
  .then(() => {
    console.log('Promise then');
  })
  .then(() => {
    console.log('Promise then 2');
  });

console.log('Finish');

// Beginning
// Before promise
// Finish
// Timeout
// In promise
// Promise then
// Promise then 2

// Порядок виконання:
// 1. Основні синхронні задачі
// 2. Заплановані основними синхронними задачами Мікрозадачі (micro tasks): обробники промісів (колбеки в then())
// 3. Макрозадачі (macro tasks): setTimeout, setInterval
