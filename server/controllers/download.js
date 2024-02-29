//const User = require('../model/user');
const {getFileName}= require('../misc')
exports.textFile = (req, res) => {
    try {
        getFileName().then(fileName => res.download(fileName))

    } catch (error) {

        console.log(error)
    }
}
