var express = require('express');
var router = express.Router();
const ClientAccount = require('../models/ClientAccount');
const Dish = require('../models/Dish');
const Category = require('../models/Category');

router.get('/getAllClientAccount', async function (req, res) {
    const listClientAccount = await  ClientAccount.find().lean();
    res.send(listClientAccount);
});
router.get('/getCategory', async function(req, res) {
    const listCategory = await Category.find().lean();
    res.send(listCategory);
});
router.get('/getAllDish', async function (req, res) {
    const listDish = await Dish.find().lean();
    res.send(listDish);
})


module.exports = router;