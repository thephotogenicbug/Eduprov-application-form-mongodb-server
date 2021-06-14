const express = require('express')
const app = express()
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/faculty')
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser')

mongoose.connect( process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology: true})

mongoose.connection.on('error', error=>{
    console.log('MongoDB connection failed')
})

mongoose.connection.on('connected', connected=>{
    console.log('connected to MongoDB')
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use('/student', studentRoute)
app.use('/faculty',facultyRoute)
// middleware
app.use((req,res,next)=>{
    res.status(404).json({
        error:'Bad url request'
    })
})

module.exports = app;