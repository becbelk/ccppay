
const Context=require('../../model/global')
exports.insert=async ({ccp,codeCommune,amount,postalTax})=>{
 try {
    console.log('[context]=>[inserting...],',ccp);
    let result= await Context.insertMany([{ccp:ccp,codeCommune:codeCommune,amount:amount,postalTax:postalTax}]);
    console.log('[context]=>[... iinserted,',ccp);
} catch (error) {
    console.log('[context]=>[insert],error',error);
 }   

}