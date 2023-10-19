const http = require('http');
const fs = require('fs');

// URL class
// const myURL = new URL('https://example.org/foo?teste1#bar');
// console.log(myURL.hash);
// console.log(myURL.host);
// console.log(myURL.href);
// console.log(myURL.protocol);
// console.log(myURL.pathname);
// console.log(myURL.search);

// Create a server
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
      case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
      case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
      case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
      default:
        path += '404.html';
        res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        console.error(err);
        res.end();
      } else {
          res.end(data);
      }
    });
});

server.listen(3333, 'localhost', () => {
    console.log('Running on port 3333')
});