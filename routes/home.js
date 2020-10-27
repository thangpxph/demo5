var express = require('express');
var router = express.Router();
const User = require('../models/User');

router.get('/home', async function (req, res, next){
        res.render('home');
});
module.exports = router;