var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Dish = require('../models/Dish');
const Category = require('../models/Category');
const Table = require('../models/Table');
/* GET home page. */
router.get('/', async function (req, res) {
    res.render('login/index.hbs');
})
router.post('/', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password
    const result = await User.findOne({username: username, password: password});
    if (result != null) {
        res.redirect('/home/home.hbs');
    } else {
        res.render('login/index', {
            status: "Thất Bại", content_status: "Tài khoản hoặc mật khẩu không chính xác",
            isShowNotification: null,
            styleButton: 'alert alert-danger m-t-20'
        })
    }
});
module.exports = router;