var express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
    res.render('home/add_table/add_table.hbs')
})

module.exports = router;
