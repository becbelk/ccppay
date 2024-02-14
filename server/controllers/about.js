exports.display=async (req, res) => {
    try {
        res.render('about',{title:"about"})
    } catch (error) {
        res.status().send({ "Sorry! ...": error });
    }
}