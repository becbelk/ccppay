const fs = require('fs/promises');
const format=require('./line_formatter');
const ds=require('./mock')
const { Buffer } = require('node:buffer');

const source = ds.dataSource;

const createFile = async (filePath) => {
    // try {
    //     await fs.open(filePath, "r");
    //     console.log("[*]: Error while creating the file ", filePath, ", file is already exist!")

    // } catch (error) {
    //     //عدم حدوث أي شيء فقط التحقق من عدم وجود الملف سابقا
    // }
    // await fs.await(filePath, "w");
    // console.log(`[*]: ${filePath} is succefully created`);

 
//     let buffer = new Buffer.from(source.map((person)=>{return format.line(person)}),'utf-8')

//  console.log(buffer.toString())



 console.log(source.map((person)=>{return format.line(person)}))
}