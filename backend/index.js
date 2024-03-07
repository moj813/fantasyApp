const express = require('express');
const app = express();
const dbConnect = require('./config/connect')
const {register , login} = require('./controller/Auth')
const bodyParser = require('body-parser');
const mailSender = require('./transport/mailsender');
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

dbConnect();
app.post('/register',register)
app.post('/login',login)
app.get('/otp',(req,res)=>{
    const data = mailSender("mojonly813@gmail.com","test","Hello JEEE")
    res.json({
        success:true,
        msg:"Otp Sent"
    })
});

app.listen(process.env.PORT,()=>{
    console.log("App is Listing at port 4000")
})