const jwt = require('jsonwebtoken');
//const User = require('../model/user');
const {getFileName}= require('../misc')
exports.textFile = (req, res) => {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        getFileName(decoded.userId).then(fileName => res.download(fileName))

    } catch (error) {

        console.log(error)
    }
}
