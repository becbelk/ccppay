//const Pay = require('../model/pay');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const format = require('./formatter');
const { getFileName } = require('../misc')



exports.textFile = (req, res) => {
    console.log('[textFIle] to generate file text that contain results')
    //  console.log(req.body)
    console.log('generate file to download');;
 
    getOrdre(req)
        .then(
            ordre => {
                console.log('ordre---->')
                return ordre.persons.reduce((stack, currentPerson) => [...stack, ...format.line(currentPerson)],
                    [format.header(ordre.header)]);
            })
        .then(data => {
            console.log('data--->',data)
            return text = data.reduce((p, c) => { return p + c }, '');
        })
        .then(text => {
         //   console.log('text--->',text);
            getFileName(res.locals.userId).then(fileName => {
                console.log('fileName-->', fileName)
                fs.writeFile(fileName, text,
                    err => {
                        if (err) { console.log(err); }
                        else { console.log("File written successfully\n"); }
                    });
                //    let stream = fs.createReadStream(fileName, 'utf8'); 
                //stream.pipe(res)
            })

        })
}
const getOrdre = async (req) => {
    try {
        //   console.log('req=====',req.body)
        return req.body;

    } catch (err) {
        return err
    }
}