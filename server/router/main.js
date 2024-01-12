const express = require('express');
const format = require('../controllers/line_formatter');
const file = require('../controllers/file_generator');
const ds = require('../controllers/mock');
const source = ds.dataSource;
const router = express.Router();



router.get('/', (req, res) => {
    ccp = 6160988;
    key = 43;
    amount = 33344.24;
    count = 32;
    month = 3;
    year = 2024
    console.log(format.header({ ccp: ccp, key: key, amount: amount, count: count, month: month, year: year }).length)
    console.log(source.map((person) => { return format.line(person) }))
    res.render('index');

})
module.exports = router;