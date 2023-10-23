const express = require('express');

const server = express();
const blogsRoutes = require('./routes/blogsRoutes');
server.listen(3333);

// set view engine -> EJS
server.set('view engine', 'ejs');
server.set('views', 'views_ejs');

// middleware & static files
// -> make files public to access
// -> 'public' == folder's name
server.use(express.static('public'));

server.use(express.urlencoded({
  extended: true
}));

const blogs = [
  {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
];

server.get('/', (req, res) => {
  // the first parameter is the file's name to be rendered without the extension
  // the second parameter sends data to the EJS file

  // insert javascript in EJS
  // <% line of code here %>
  // if it is a single value === <%= value here %>
  res.render('index', {
    title: 'Home',
    blogs: blogs
  });
});

server.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About' 
  });
});

// blogs routes
server.use('/blogs', blogsRoutes);

server.use((req, res) => {
  res.status(404).render('404');
})