const Pay = require('../model/pay');
const title = 'تضامن رمضان'

exports.fromSaved=async (req, res) => {
    try {
        const ordre = await Pay.find({})
        res.render('saved-operations', { title, ordre });
    } catch (error) {
        console.log(error)
    }
}

