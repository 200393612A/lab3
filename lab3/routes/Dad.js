

'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Dad', { title: 'Dad', comment: 'ahhan main baa hu' });
});

module.exports = router;