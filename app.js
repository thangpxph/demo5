var express = require('express');
var path = require('path');
var hbs = require('express-handlebars')
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var apiRouter = require('./routes/api');
var orderRouter = require('./routes/order');
var addTableRouter = require('./routes/addTable');
var categoryRouter = require('./routes/category')
var addCategoryRouter = require('./routes/addCategory');
var DishRouter = require('./routes/dish');
var addDish = require('./routes/addDish');
var clientAccountRouter = require('./routes/clientAccount');



var app = express();

mongoose.connect('mongodb+srv://thangpxph:123456aA@@cluster0.y4hi5.mongodb.net/quanly', {useNewUrlParser:true});
console.log('Kết nối thành công');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', hbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/images'));
app.use(express.static('public/css'));


app.use('/', indexRouter);
app.use('/home',homeRouter);
app.use('/api', apiRouter);
app.use('/order', orderRouter);
app.use('/addTable', addTableRouter);
app.use('/category', categoryRouter);
app.use('/category/addCategory', addCategoryRouter);
app.use('/dish', DishRouter);
app.use('/dish/addDish', addDish);
app.use('/clientAccount', clientAccountRouter);


module.exports = app;
