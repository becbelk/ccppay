const prefix = '*00000000';

exports.header = (payer) => {
    const suffix = "              0";
//console.log(payer)
    return prefix + formatCCP(payer.ccp)
        + formatAmount(payer.amount) + formatCount(payer.count) + formatDate(payer.month, payer.year)
        + suffix
}


exports.line = ({ name, ccp, amount }) => {
    let initial = prefix + formatCCP(ccp) + formatAmount(amount) + formatName(name)
    return "\n"+String(initial).padEnd(61, " ") + "1";
}


const formatName = (fullName) => {
    let str = (fullName.length > 27) ? fullName.slice(0, 27) : fullName
    return String(str)
    .toUpperCase()
    .padEnd(27, ' ')
}

const formatCCP = (str) => {
    const delimiterRegex = /[\/\\:\s-]+/;
let array=String(str).split(delimiterRegex)

ccp=array[0];
key=array[1]

    return String(ccp).padStart(10, '0') + String(key).padStart(2, '0');
}


const formatAmount = (amount) => {
    return String(Number(amount) * 100).padStart(13, 'O')
}


// le nbr des benificiaires
const formatCount = (count) => {
    return String(Number(count).toFixed(0)).padStart(7, 'O');
}

const formatDate = (month, year) => {
    return String(Number(month).toFixed(0)).padStart(2, 'O') +
        String(Number(year).toFixed(0)).padStart(4, 'O');
}