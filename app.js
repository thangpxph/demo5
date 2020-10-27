var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');



var app = express();

mongoose.connect('mongodb+srv://thangpxph:123456aA@@cluster0.y4hi5.mongodb.net/quanly', {useNewUrlParser:true});
console.log('Kết nối thành công');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use('/', indexRouter);
app.use('/', homeRouter);



module.exports = app;
