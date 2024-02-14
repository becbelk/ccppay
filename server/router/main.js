const express = require('express');
const context= require('../controllers/context/context');
const home= require('../controllers/home');
const about= require('../controllers/about');
const download= require('../controllers/download');
const {config}= require('../controllers/context/context-configurator');
const router = express.Router();

const generate = require('../controllers/generator')
const verify = require('../controllers/verifier')
const display = require('../controllers/displayer')

router.get('/',config,home.home )
router.get('/home', config,home.display)

router.post('/configure',context.config)
router.get('/about', about.display)

router.post('/verify',config, verify.buildOrdre)
//router.get('/generate',config, generate.textFile)
router.post('/generate',config, generate.textFile)
router.get('/display',config, display.fromSaved)
router.get('/download',config, download.textFile)

module.exports = router;