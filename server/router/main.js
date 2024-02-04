const express = require('express');

const router = express.Router();

const generate = require('../controllers/generator')
const verify = require('../controllers/verifier')
const display = require('../controllers/displayer')
const title = 'تضامن رمضان'

router.get('/', async (req, res) => {
    try {
        res.render('index', { title, isEmpty:false });
    } catch (error) {
        res.status().send({ "Sorry! ...": error });
    }
})
router.get('/home', async (req, res) => {
    try {
        res.redirect('/')
    } catch (error) {
        res.status().send({ "Sorry! ...": error });
    }
})
router.get('/about', async (req, res) => {
    try {
        res.render('about',{title:"about"})
    } catch (error) {
        res.status().send({ "Sorry! ...": error });
    }
})

router.post('/verify', verify.fromClipBoard)

router.get('/generate', generate.textFile)
router.get('/display', display.fromSaved)

module.exports = router;