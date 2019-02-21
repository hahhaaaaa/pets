
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products')
var filesRouter = require('./routes/files')
var petsRouter = require('./routes/pets')
var serviceRouter = require('./routes/serviceRou')
const session=require('express-session');
var usersRouter = require('./routes/users');
var storeRouter=require('./routes/store')
var qiniu=require('./routes/qiniu')

require('./dao/database')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/files', filesRouter);
app.use('/pets',petsRouter)
app.use('/serviceRou',serviceRouter)


app.use('/store',storeRouter)

app.use('/token',qiniu)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(session({
  //��½״̬��ѯ
  secret:'asda',
  resave:'true',
  saveUninitialized:true //Ҳ�Ǳ���
}))//��½״̬��¼����

module.exports = app;
