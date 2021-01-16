const express = require('express')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const connectDB = require('./config/db');
const auth= require('./routes/auth')
 
const app = express()

connectDB()

app.use(bodyParser.json())
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})


app.use('/',auth)
