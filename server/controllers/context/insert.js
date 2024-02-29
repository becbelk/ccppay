
const User=require('../../model/user')
exports.insert=async ({ccp,codeCompany,amount,postalTax})=>{
 try {
    console.log('[context]=>[inserting...],',ccp);//todo:update
    let result= await User.updateOne({}[{ccp:ccp,codeCompany:codeCompany,amount:amount,postalTax:postalTax}]);
    console.log('[context]=>[... iinserted,',ccp);
} catch (error) {
    console.log('[context]=>[insert],error',error);
 }   

}