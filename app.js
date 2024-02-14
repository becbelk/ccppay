require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config');
const mongoStore= require('connect-mongo');
const router = require('./server/router/main');


const app = express()
const port= process.env.PORT||3030;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(expressLayouts);
app.set('layout','./layouts/main.ejs');
app.set('view engine', 'ejs');
connectDB();
app.use(expressLayouts);
app.use('/',router)
app.use('*',(req,res)=>{
    res.status(404).render('404',{title:"صفحة غير موجودة"})
})

app.listen(port,console.log('listening at port',port));