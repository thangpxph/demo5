var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Dish = require('../models/Dish');
const Category = require('../models/Category');
/* GET home page. */
router.get('/', async function (req, res) {
    // let nameDish = "Đùi gà xối mắm";
    // let category = "Món Chính";
    // let time = "20";
    // let price = 50000;
    // let image = null;
    // let ingredient = "Đùi gà, cơm rang, gia vị";
    //
    // let dish = new Dish({
    //     nameDish: nameDish,
    //     category: category,
    //     time: time,
    //     price: price,
    //     image: image,
    //     ingredient: ingredient
    // })
    //
    // let status = await dish.save();
    res.render('index');
})
router.post('/', async function (req, res) {

    const username = req.body.username;
    const password = req.body.password
    const result = await User.findOne({username: username, password: password});
    if (result != null) {
        res.render('home');
    } else {
        res.render('index', {
            status: "Thất Bại", content_status: "Tài khoản hoặc mật khẩu không chính xác",
            isShowNotification: null,
            styleButton: 'alert alert-danger m-t-20'
        })
    }
})
module.exports = router;