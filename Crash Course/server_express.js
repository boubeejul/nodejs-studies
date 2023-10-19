const express = require('express');

// express app
const server = express();

// listen for request
server.listen(3333);


server.get('/', (req, res) => {
  res.send({message: 'hello world'});
});

// don't use '../'
server.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname});
});

// redirects
server.get('/about-me', (req, res) => {
  res.redirect('/about');
});

// use() -> incoming requests
server.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname});
})