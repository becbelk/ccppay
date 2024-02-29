const User = require('./model/user');



exports.ccpCoherent=(ccp)=>{
    return true;
}

exports.getFileName = async (username) => {
    try {//todo: find('***)
        let user = await User.findOne({username:username});
        let code = user[0].codeCompany;
        return './outputs/ordre_de_virrement_' + code + '.txt';
    } catch (error) {

    }
}