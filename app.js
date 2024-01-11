require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = require('./server/router/router');

const app = express()
const port= process.env.PORT||3030;


app.use(expressLayouts);
app.set('layouts','./layouts/main.ejs');
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.listen(port,console.log('listening at port',port));