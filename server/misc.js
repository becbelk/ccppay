const User = require('./model/user');



exports.ccpCoherent=(ccp)=>{
    return true;
}

exports.getFileName = async (id) => {
    try {
        let user = await User.findById(id);
        let code = user.codeCompany;
        return './outputs/ordre_de_virrement_' + code + '.txt';
    } catch (error) {
console.log('error',error)
    }
}