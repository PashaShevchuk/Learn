// const fs = require('fs');
//
// console.log('START');
//
// setTimeout(() => console.log('setTimeout 1'), 0);
//
// setImmediate(() => console.log('setImmediate'));
//
// fs.readFile('text_file.txt', () => {
//   setTimeout(() => console.log('readFile setTimeout'), 0);
//   setImmediate(() => console.log('readFile setImmediate'));
//   process.nextTick(() => console.log('readFile nextTick'));
// });
//
// Promise.resolve()
//   .then(() => {
//     console.log('Promise');
//     process.nextTick(() => console.log('Promise nextTick'));
//   });
//
// process.nextTick(() => console.log('nextTick'));
//
// setTimeout(() => console.log('setTimeout 2'), 0);
//
// console.log('END');

// 1 цикл:
// START
// END
// nextTick
// Promise
// Promise nextTick
// setTimeout 1
// setTimeout 2

// 2 цикл:
// setImmediate
// readFile nextTick
// readFile setImmediate

// 3 цикл:
// readFile setTimeout

Promise.resolve().then(() => console.log('promise 1 resolved'));
Promise.resolve().then(() => console.log('promise 2 resolved'));

Promise.resolve().then(() => {
  console.log('promise 3 resolved')
  process.nextTick(() => console.log('next tick inside promise resolve'));
});

Promise.resolve().then(() => console.log('promise 4 resolved'));
Promise.resolve().then(() => console.log('promise 5 resolved'));

setImmediate(() => console.log('setImmediate 1'));
setImmediate(() => console.log('setImmediate 2'));

process.nextTick(() => console.log('next tick 1'));
process.nextTick(() => console.log('next tick 2'));
process.nextTick(() => console.log('next tick 3'));

setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate 3'));
setImmediate(() => console.log('setImmediate 4'));

// next tick 1
// next tick 2
// next tick 3
// promise 1 resolved
// promise 2 resolved
// promise 3 resolved
// promise 4 resolved
// promise 5 resolved
// next tick inside promise resolve
// setTimeout
// setImmediate 1
// setImmediate 2
// setImmediate 3
// setImmediate 4

