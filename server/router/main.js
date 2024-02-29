const express = require('express');
//const context= require('../controllers/context/context');
const home= require('../controllers/home');
const about= require('../controllers/about');
const download= require('../controllers/download');

const {config}= require('../controllers/context/context-configurator');
const router = express.Router();

const generate = require('../controllers/generator')
const verify = require('../controllers/verifier')
const display = require('../controllers/displayer');
const admin= require('./admin')
const { authenticate } = require('./auth');

router.get('/',authenticate,home.home)
router.get('/home',authenticate, home.home)

router.get('/signIn',admin.signInForm)
router.post('/signIn',admin.signIn)

router.get('/register', admin.register,)
router.post('/register', admin.createUser)


router.get('/configure',config)
router.get('/about', about.display)

router.post('/verify',config, verify.buildOrdre)
//router.get('/generate',config, generate.textFile)
router.post('/generate',config, generate.textFile)
router.get('/display',config, display.fromSaved)
router.get('/download',config, download.textFile)
router.get('/register-success', admin.success)
router.get('/register-failure', admin.failure)

module.exports = router;