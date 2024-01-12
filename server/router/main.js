const express=require('express');
const generate=require('../controllers/generator');
const router=express.Router();



router.get('/',(req,res)=>{
    ccp=6160988;
    key=43;
    amount=33344.24;
    count=32;
    month=3;
    year=2024
    console.log(generate.header({ccp:ccp,key:key,amount:amount,count:count, month:month,year:year}).length)
res.render('index');

})
module.exports= router;