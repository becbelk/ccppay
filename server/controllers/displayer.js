const Pay = require('../model/pay');
const title = 'تضامن رمضان'

exports.fromSaved=async (req, res) => {
    try {
        const order = await Pay.find({})
        res.render('saved', { title, order });
    } catch (error) {
        console.log(error)
    }
}