const fs = require('fs/promises');
const format = require('./line_formatter');
const ds = require('./mock')
const { Buffer } = require('node:buffer');


exports. writeFile =async ({path,buffer})=> {
    console.log('buffer=====',buffer)
    let data = [];
    data.push(format.header(ds.payer));
    buffer.map((person) => {  data.push(format.line(person)) })
    console.log(data)
    fs.appendFile(path,data,'utf-8')
}
const createFile = async (filePath) => {

    source.map((person) => { return format.line(person) })




}