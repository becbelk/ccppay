const title = 'تضامن رمضان'

exports.display=async (req, res) => {
    try {
        res.redirect('/')
    } catch (error) {
        res.status().send({ "Sorry! ...": error });
    }
}


exports.home=async (req, res) => {
    try {
        res.render('index', { title, isEmpty:false });
    } catch (error) {
        res.status(500).send({ "Sorry! ...": error });
    }
}