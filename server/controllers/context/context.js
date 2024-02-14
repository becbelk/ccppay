const {insert}=require('./insert')
exports.config=async (req, res) => {
    try {
      await  insert({ccp:req.body.ccp,codeCommune:req.body.codeCommune,amount:req.body.amount,postalTax:req.body.postalTax});
        res.redirect('/')
    } catch (error) {
        res.status().send({ "Sorry! ...": error });
    }
}