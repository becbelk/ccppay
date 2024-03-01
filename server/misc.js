const User = require('./model/user');



exports.ccpCoherent=(ccp)=>{
    return true;
}

exports.getFileName = async (id) => {
    try {
        let user = await User.findById(id);
        //console.log('user=',user)
        let code = user.codeCompany;
        console.log('code====>',code)
        return './outputs/ordre_de_virrement_' + code + '.txt';
    } catch (error) {
console.log('error',error)
    }
}