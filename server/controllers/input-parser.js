exports.fromClipBoard = (inputString) => {
  let resultArray=[]
  console.log('input', inputString)
  const lineregex = /[a-z ]+[\s]+[\d]{5,10}[/ -:#][\d]{1,2}[\s]+[\d]+(.)[\d]{0,2}/g;
  const nameRegEx = /[a-z ]+/i
  const ccpRegEX = /[\d]{5,10}[/ -:#][\d]{1,2}/
  const amountRegEx = /([\d]+[\.]?(s))|([\d]+[\.][\d]{0,2})/

  let match;
  while ((match = lineregex.exec(inputString)) !== null) {

    // match[1] contains the name, match[2] contains the account
    let name = nameRegEx.exec(match)[0];
    let ccp = ccpRegEX.exec(match)[0];
    let amount = amountRegEx.exec(match)[0];

   // console.log('name=', name, 'ccp=', ccp, 'amount=', amount)

    const pair = { name: match[1], account: parseInt(match[2]) };
    resultArray.push({name,ccp,amount});
  }//todo: le montant doit etre la somme
  return resultArray;
}