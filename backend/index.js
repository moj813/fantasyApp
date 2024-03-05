const express = require('express');
const app = express();
const dbConnect = require('./config/connect')
const {register , login} = require('./controller/Auth')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

dbConnect();
app.post('/register',register)
app.post('/login',login)

app.listen(process.env.PORT,()=>{
    console.log("App is Listing at port 4000")
})