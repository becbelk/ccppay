const headerRegEx = /^[\s]*[\d]{5,10}[/ -:#][\d]{2}[\s][\d]+(.)[\d]{2}[\s]+[\d]+[\s]+[\d]{2}[/-][\d]{4}[\s]*$/g;
const lineregex = /[a-z ]+[\s]+[\d]{5,10}[/ -:#][\d]{2}[\s]+[\d]+(.)[\d]{0,2}/gi;
const nameRegEx = /[a-z ]+/i
const ccpRegEX = /[\d]{5,10}[/ -:#][\d]{2}/
const amountRegEx = /[\s]+([\d]+\.[\d]{2})[\s]*/
const intRegEx = /[\s]+[\d]+[\s]+/
const dateVirementRegEx = /[\s]+[\d]{2}\/[\d]{4}[\s]*/
const emptyLineRegEx = /[\s]+[\n]+/
let match;

exports.header = (header) => {
    if (header != null && header != undefined && !isEmptyLine(header)) {
        if ((match = headerRegEx.exec(header)) !== null) {
            let ccp = ccpRegEX.exec(header)[0].trim();
            let totalAmount = amountRegEx.exec(header)[0].trim();
            let personCount = intRegEx.exec(header)[0].trim();
            let date = dateVirementRegEx.exec(header)[0].trim();
            return { ccp, totalAmount, personCount, date };
        }
        else {
            return {};
        }
    }
    else {
        return {}
    }
}
exports.list = (inputList) => {

    let list = trimLines(inputList);
    let resultArray = []
    if (list != null && list != undefined)

        while ((match = lineregex.exec(list)) !== null) {
            let name = nameRegEx.exec(match)[0].toUpperCase().trim();
            let ccp = ccpRegEX.exec(match)[0].trim();
            let amount = amountRegEx.exec(match)[0].trim();
            const person = { name: match[1], account: parseInt(match[2]) };
            resultArray.push({ name, ccp, amount });
        }
    return resultArray;
}
const isEmptyLine = (line) => {
    return emptyLineRegEx.test(line)
}

const trimLines = (string) => {
    return string.replace(emptyLineRegEx, "\n")
}