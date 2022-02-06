const fs = require('fs');

const fileData = fs.readFileSync('./text_file.txt', 'utf8');

console.log(fileData);
console.log('The file has been read');

// Hello Node.js!
// The file has been read


fs.readFile('./text_file.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});

console.log('The file has been read');

// The file has been read
// Hello Node.js!
