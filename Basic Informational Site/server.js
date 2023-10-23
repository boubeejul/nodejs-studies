const express = require('express');


const server = express();
server.listen(3333);
server.use(express.static('public'));

server.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname});
});

server.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname});
});

server.get('/contact-me', (req, res) => {
    res.sendFile('./views/contact-me.html', { root: __dirname});
});

server.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname});
})

