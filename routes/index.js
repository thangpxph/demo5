var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Dish = require('../models/Dish');
const Category = require('../models/Category');
const Table = require('../models/Table');
/* GET home page. */
router.get('/', async function (req, res) {
    // let nameTable = "Bàn số 3";
    // let amount = 4
    // let status = 3;
    // let table = new Table({
    //     nameTable: nameTable,
    //     amount: amount,
    //     status: status
    // });
    //  let statu = await table.save();
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