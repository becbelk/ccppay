
const { getFileName } = require('../misc')
exports.textFile = (req, res) => {
    try {
 
        getFileName(res.locals.userId).then(fileName => res.download(fileName))

    } catch (error) {

        console.log(error)
    }
}
