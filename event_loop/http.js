const http = require('http');

console.log('Start');

http.createServer((req, res) => {
  res.write('Hello world!');
  res.end();
}).listen(3000);

console.log('End');

// Start
// End
// програма не закривається
