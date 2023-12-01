const express = require('express')

const app = express()
app.listen(3333)

// views
app.set('view engine', 'ejs');
app.set('views', 'views');

// set public folder
app.use(express.static('public'));

// url encoded
app.use(express.urlencoded({
  extended: true
}));


const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

// routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        messages: messages
      });
})

app.get('/create', (req, res) => {
    res.render('create', { 
        title: 'Add a message'
      });
})

app.post('/create', (req, res) => {
    const { message, username } = req.body

    messages.push({
        text: message,
        user: username,
        added: new Date()
    })

    res.redirect('/')
})

// app.use((req, res) => {
//     res.status(404).render('404');
//   })