const build = require('../controllers/builder');
const Pay = require('../model/pay');
const title = 'تضامن رمضان'
exports.fromClipBoard = async (req, res) => {
    try {

        let ordre = getClipBoard(req)
        //console.log('op=',op)
        if (!isObjectEmpty(ordre.header) && !isObjectEmpty(ordre.persons)) {
            //    console.log('op!={ header: {}, persons: [] }')
            let operations = await Pay.find({
                'header.totalAmount': Number(ordre.header.totalAmount),
                'header.personCount': ordre.header.personCount,
                'header.date': ordre.header.date
            })

            if (operations.length==0) {
                console.log('[fromClipBoard] : Element(', ordre.header.totalAmount, ',', ordre.header.personCount, ',', ordre.header.date, ') not fond create one instead')
                if (orderIsCorrect(ordre.header, ordre.persons)) {
                    let insert = await Pay.insertMany([ordre]);
                    operations = await Pay.find({
                        'header.totalAmount': Number(ordre.header.totalAmount),
                        'header.personCount': ordre.header.personCount,
                        'header.date': ordre.header.date
                    });
                    res.render('verify', { reportHeader: ordre.header, reportList: ordre.persons, title, id: operations[0]._id });
                }
            } else {
                operations = await Pay.find({});//todo id of gotten op
                res.render('saved', { title, operations })
            }
        } else {
            res.render('index', { title, isEmpty: true })

        }


    } catch (error) {
        console.log(error)//todo render page
    }
}
const getClipBoard = (req) => {
    let header = build.header(req.body.header);
    let persons = build.list(req.body.list)
    if (header != {} && persons != []) {
        { return { header, persons } }
    } else { return {} }
}
const orderIsCorrect = (header, list) => {
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