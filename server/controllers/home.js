const title = 'تضامن رمضان'


exports.home=async (req, res) => {
    try {
        res.render('index', { title, isEmpty:false });
    } catch (error) {
        res.status(500).send({ "Sorry! ...": error });
    }
}
