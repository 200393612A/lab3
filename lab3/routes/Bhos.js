'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Bhos', { title: 'Bhos', comment: 'pehle lick karo' });
});

module.exports = router;