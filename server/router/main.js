const express = require('express');
const format = require('../controllers/line_formatter');
const file = require('../controllers/file_generator');
const ds = require('../controllers/mock');
const parse=require('../controllers/input-parser')
const source = ds.dataSource;
const router = express.Router();



router.get('/', (req, res) => {
   file.writeFile();
    res.render('index');

})


router.post('/generate',async (req, res) => {
    const clientClipBOard=req.body.list
 //console.log('req.body.list=',req.body.list)
let buffer=parse.fromClipBoard(clientClipBOard);
console.log('buffer=',buffer)
file.writeFile({path:'./text.txt',buffer:buffer})
console.log('fromClipBoard=',buffer)
     res.render('index');
 })
module.exports = router;