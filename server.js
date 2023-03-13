// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


// configuration
require('dotenv').config()
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true, useUnifiedTopology: true})
    .then (() =>{
        console.log('connected to mongo:', process.env.MONGO_URI)
    })
    .catch((err) => {
        console.error('Error connecting to mongoDB', err)
    })
// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// Routes
app.get('/', (req,res)=>{
    res.send('This is my books api!!!')
})


// BOOKS
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

// 404 PAGE
app.get('*', (req, res) => {
    res.send('<h1>404 Page<h1>')
})



app.listen(process.env.PORT, () => {
    console.log('Port', PORT , 'is alive')
})