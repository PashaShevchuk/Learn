// for (let i = 0; i <= 4; i = i + 1) {
//   console.log(i);
// }

// i++       =>  i = i + 1
// i += 2    =>  i = i + 2

// 0, i = i + 1   =>   0 = 0 + 1 => 1
// 1, i = i + 1   =>   1 = 1 + 1 => 2
// 2, i = i + 1   =>   2 = 2 + 1 => 3
// 3, i = i + 1   =>   3 = 3 + 1 => 4

// for (let i = 5; i >= 0; i = i - 1) {
//   console.log(i);
// }

// i--  =>  i = i - 1
// i++  =>  i = i + 1


const users = [
  { name: 'Oleg', age: 25 },     // 0
  { name: 'Max', age: 20 },      // 1
  { name: 'Alex', age: 18 },     // 2
  { name: 'Martin', age: 24 },   // 3
  { name: 'Masha', age: 19 },    // 4
  { name: 'Petro', age: 8 },     // 5
  { name: 'Vasil', age: 60 },    // 6
  { name: 'Gena', age: 99 },     // 7
  { name: 'Bob', age: 0.5 },     // 8
  { name: 'Ava', age: 22 },      // 9
];

for (let i = 0; i <= users.length - 1; i++) {
  const user = users[i];
  console.log(user)
}

// console.log(users.length);
// console.log(users[9]);
// console.log(users[users.length - 1]);
