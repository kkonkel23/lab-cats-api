var express = require('express');
var router = express.Router();
const catsCtrl = require('../controllers/api/cats');
const cat = require('../models/cat');

router.get('/cats', catsCtrl.index)
router.get('/cats/:id', catsCtrl.show)
router.post('/cats', catsCtrl.create)
router.put('/cats/:id', catsCtrl.update)
router.delete('/cats/:id', catsCtrl.delete)

module.exports = router;
