const Pay = require('../model/pay');
const fs = require('fs');
const format = require('./line_formatter');
//const { Buffer } = require('node:buffer');

exports.textFile = async (req, res) => {
    console.log('generate file to download')
    Pay.findById({ _id: req.query.id })
        .then(
            order => {
             return   order.persons.reduce((stack,currentPerson) =>  [...stack,...format.line(currentPerson)] ,
                [format.header(order.header)]); 
        })
        .then(data => {
            return text = data.reduce((p, c) => { return p + c }, '');
        })
        .then(text => {
            let file = fs.writeFile("outputs/order.txt", text,
                err => {
                    if (err) { console.log(err); }
                    else { console.log("File written successfully\n"); }
                });

            let stream = fs.createReadStream("outputs/order.txt", 'utf8');
            stream.pipe(res)
        })
    //.then(res.download("outputs/order.txt"))
}