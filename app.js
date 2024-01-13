require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = require('./server/router/main');

const app = express()
const port= process.env.PORT||3030;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(expressLayouts);
app.set('layout','./layouts/main.ejs');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use('/',router)

app.listen(port,console.log('listening at port',port));