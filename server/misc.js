const Context = require('./model/global');



exports.ccpCoherent=(ccp)=>{
    return true;
}

exports.getFileName = async () => {
    try {
        let context = await Context.find({});
        let code = context[0].codeCommune;
        return './outputs/ordre_de_virrement_' + code + '.txt';
    } catch (error) {

    }
}