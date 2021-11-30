const http = require('http');
// import http from 'http';


const server = http.createServer((request, response) => {
  // content-length формируется автоматически!
  response.write('Hello, world!');
  response.end();
});

const port = 4000;
server.listen(port, () => {
  console.log('Server has been started');
});