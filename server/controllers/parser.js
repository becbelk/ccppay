
const User = require('../model/user');
const lineregex = /([a-zÀ-ÿ]+[\s]+)+[\d]{5,10}[/ -:#][\d]{2}[\s]+[\d]+(.)[\d]{0,2}/gi;
const nameRegEx = /([a-zÀ-ÿ]+[\s]+)+/i;
const ccpRegEX = /[\d]{5,10}[/ -:#][\d]{2}/;
const amountRegEx = /[\s]+([\d]+\.[\d]{2})[\s]*/;
const emptyLineRegEx = /([\s]+[\n]+)+/;

let match;

exports.list = async (input) => {
    try {
        const persons = await parse(input);
        return await buildOrdre(persons);
    } catch (err) {
        return console.log(err);
    }
}


const buildOrdre = async (persons,username) => {
    try {
        console.log('[buildOrdre]')
        let totalAmount = persons.reduce(
            (acc, curr) => Number(acc) + Number(curr.amount), 0);
        let personCount = persons.length;
        let d = new Date();
        let mm = String(d.getMonth() + 1).padStart(2, '0');
        let yyyy = d.getFullYear();
        let date = mm + '/' + yyyy;
        let user = await User.find({username:username})
        console.log({ personCount: personCount, totalAmount: totalAmount, ccp: context[0].ccp, date: date })
        console.log('[buildHeader] result: date=', date, ', totalAmount= ', totalAmount, ', personCount= ', personCount, ', ccp=', context[0].ccp);
        return {
            persons: persons,
            header: { personCount: personCount, totalAmount: totalAmount, ccp: context[0].ccp, date: date }
        };;

    }
    catch (error) {
        console.log('***************** context not found or other errors   **********************', error);
    }
}



const parse = (input) => {

    return new Promise((resolve, reject) => {
        let list = trimLines(input);
        let persons = []
        if (list != null && list != undefined)

            while ((match = lineregex.exec(list)) !== null) {
                //            console.log('nameRegEx.exec(match)=',nameRegEx.exec(match))
                let name = nameRegEx.exec(match)[0].toUpperCase().trim();
                name = name.trim().replace(/\s+/, ' ')
                //            console.log('name =',name)
                let ccp = ccpRegEX.exec(match)[0].trim();
                let amount = amountRegEx.exec(match)[0].trim();
                const person = { name: match[1], account: parseInt(match[2]) };
                persons.push({ name, ccp, amount });
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
