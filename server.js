// Dependencies
const express = require('express')
const mongoose = require('mongoose')


// configuration
require('dotenv').config()
console.log(preocess.env.PORT);
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
    res.send('this is my books api!!!')
})