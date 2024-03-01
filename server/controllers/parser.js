
const User = require('../model/user');
const lineregex = /([a-zÀ-ÿ]+[\s]+)+[\d]{5,10}[/ -:#][\d]{2}[\s]+/gi;
const nameRegEx = /([a-zÀ-ÿ]+[\s]+)+/i;
const ccpRegEX = /[\d]{5,10}[/ -:#][\d]{2}/;
const amountRegEx = /[\s]+([\d]+\.[\d]{2})[\s]*/;
const emptyLineRegEx = /([\s]+[\n]+)+/;

let match;

exports.list = async (input, id) => {
    try {
        const persons = await parse(input);
        return await buildOrdre(persons, id);
    } catch (err) {
        return console.log(err);
    }
}


const buildOrdre = async (persons, id) => {
    try {
        let user = await User.findById(id)
        let amount=user.amount+user.postalTax
        let _persons=persons.map((person=>{return {...person,amount}}))
        console.log('[buildOrdre] : for user{', id, '}');
        let totalAmount = _persons.reduce(
            (acc, curr) => Number(acc) + Number(curr.amount), 0);
        let personCount = _persons.length;
        let d = new Date();
        let mm = String(d.getMonth() + 1).padStart(2, '0');
        let yyyy = d.getFullYear();
        let date = mm + '/' + yyyy;
        //console.log({ personCount: personCount, totalAmount: totalAmount, ccp: user.ccp, date: date })
        console.log('[buildHeader] result: date=', date, ', totalAmount= ', totalAmount, ', personCount= ', personCount, ', ccp=', user.ccp);
        return {
            persons: _persons,
            header: { personCount: personCount, totalAmount: totalAmount, ccp: user.ccp, date: date }
        };;

    }
    catch (error) {
        console.log(' user not found or other errors ***', error);
    }
}



const parse = (input) => {

    return new Promise((resolve, reject) => {
        let list = trimLines(input);
        console.log('list trimmed in parse=', list)
        let persons = []
        if (list != null && list != undefined) {
            console.log('yes is not null list');
            while ((match = lineregex.exec(list)) !== null) {
                console.log('nameRegEx.exec(match)=', nameRegEx.exec(match))
                let name = nameRegEx.exec(match)[0].toUpperCase().trim();
                name = name.trim().replace(/\s+/, ' ')
                let ccp = ccpRegEX.exec(match)[0].trim();
                persons.push({ name, ccp });
            }
        }
        if (persons != [])
            resolve(persons)
        else reject([])
    });
}


const trimLines = (string) => {
    try {
        return string.replace(emptyLineRegEx, "\n")
    }
    catch (e) {
        console.log('[trimLines] string is null', e)
    }
}
