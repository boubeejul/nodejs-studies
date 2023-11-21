const express = require('express')

const app = express()

app.listen(3333)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.set("views", "./views")
app.set("view engine", "pug")

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })
