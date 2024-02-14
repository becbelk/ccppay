
const Context = require('../../model/global');
const {ccpCoherent}= require('../../misc')
exports.config = async (req, res, next) => {
    try {

        const context = await Context.find({});
        if (context.length == 0) {
            console.log("[config] empty Context! ");
            res.render('dashboard', { title: 'configuration', });
        } else {
            console.log("[config] Context db exist ")
            if (ccpCoherent(context[0].ccp)) {
            console.log("[config] ccp good ")
            next();
            } else {
            console.log("[config] ccp bad ")
            res.render('505')
            }
        }
    } catch (error) {
        console.log("[config] error :", error)

        res.status(404).send(error)
    }
}