const {insert}=require('./insert')
exports.config=async (req, res) => {
    try {
      await  insert({ccp:req.body.ccp,codeCompany:req.body.codeCompany,amount:req.body.amount,postalTax:req.body.postalTax});
        res.redirect('/')
    } catch (error) {
        res.status().send({ "Sorry! ...": error });
    }
}