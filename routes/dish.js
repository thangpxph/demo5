var express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
    res.render('dish/index.hbs')
})

module.exports = router;