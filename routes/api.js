var express = require('express');
var router = express.Router();
const ClientAccount = require('../models/ClientAccount');

router.get('/getAllClientAccount', async function (req, res) {
    const listClientAccount = await  ClientAccount.find().lean();
    res.send(listClientAccount);
})

module.exports = router;