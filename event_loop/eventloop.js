const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('readFile');

  setTimeout(() => console.log('timeout1'));
  setImmediate(() => console.log('immediate1'));
  Promise.resolve()
    .then(() => console.log('Promise.resolve1'));
  process.nextTick(() => console.log('process.nextTick1'));
});

setTimeout(() => console.log('timeout2'));
setImmediate(() => console.log('immediate2'));

Promise.resolve()
  .then(() => console.log('Promise.resolve2'));

process.nextTick(() => console.log('process.nextTick2'));

console.log('sync code');

// sync code
// process.nextTick2
// Promise.resolve2
// timeout2
// immediate2
// readFile
// process.nextTick1
// Promise.resolve1
// immediate1
// timeout1

// const fs = require('fs');
//
// function main() {
//   setTimeout(() => console.log('1'), 0);
//   setImmediate(() => console.log('2'));
//
//   fs.readFile('./xyz.txt', (err, buff) => {
//     setTimeout(() => {
//       console.log('3');
//     }, 1000);
//
//     process.nextTick(() => {
//       console.log('process.nextTick');
//     });
//
//     setImmediate(() => console.log('4'));
//   });
//
//   setImmediate(() => console.log('5'));
//
//   setTimeout(() => {
//     process.on('exit', (code) => {
//       console.log(`close callback`);
//     });
//   }, 1100);
// }
//
// main();

// 1
// process.nextTick
// 2
// 5
// 4
// 3
// close callback

