
const User = require('../../model/user');
const { ccpCoherent } = require('../../misc')
/**
 * 
 * @param {username} req 
 * @param {dashboard} res 
 * @param {*} next 
 */
exports.config = async (req, res, next) => {
    try {
        const username = req.body.username;
        const user = await User.findOne({username:username});
        console.log
        if (user.length == 0) {
            console.log("[config] empty Context! ");
            res.render('dashboard', { title: 'configuration', });
        } else {
            console.log("[config] Context db exist ")
            if (ccpCoherent(user[0].ccp)) {
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