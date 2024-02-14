const parse = require('./parser');
const Pay = require('../model/pay');
const title = 'تضامن رمضان'
exports.buildOrdre = async (req, res) => {
    try {
        ordre = await parse.list(req.body.list);
       // console.log('datas good', ordre)

        if (!isObjectEmpty(ordre.header) && !isObjectEmpty(ordre.persons)) {
            res.render('show-to-verify', { header: ordre.header, persons: ordre.persons, title: "تحقق: عملية غير مخزنة" });
        }

    } catch (error) {
     //   console.log(error)
    }


}







// console.log('datas good')
// let operations = Pay.find({
//     'header.totalAmount': Number(ordre.header.totalAmount),
//     'header.personCount': ordre.header.personCount,
//     'header.date': ordre.header.date
// })
// console.log('operations.length=', operations.length)
// if (operations.length == 0) {
// console.log('ordre=', ordre)
// console.log('[verifier.buildOrdre] : Element(', ordre.header.totalAmount, ',', ordre.header.personCount, ',', ordre.header.date, ') not found, prepare to create one')
// if (ordreIsCorrect(ordre.header, ordre.persons)) {
//   let insert = await Pay.insertMany([ordre]);
//             }
//         } else {
//             res.render('saved-operations', { title: "بيانات مسجلة مسبقا", operations })
//         }
//     } else {
//         res.render('index', { title, isEmpty: true })

//    }
//  }).catch((error) => {
//     console.log('[verifier.buildOrdre] ', error)//todo render page
//     res.status(404).send(error)
// })



const ordreIsCorrect = (header, list) => {
    let sum = list.reduce((acc, person) => { return Number(person.amount) + acc; }, 0);
    if (Number(sum - header.totalAmount).toFixed(2) == '0.00') {//todo sometimes error here
        return (list.length == Number(header.personCount))
    }
    else {
        return false;
    }
}



const isObjectEmpty = (objectName) => {
    for (let prop in objectName) {
        if (objectName.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
};