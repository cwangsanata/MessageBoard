var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
require('dotenv').config()

var indexRouter = require('./routes/indexRoute');
var wallRouter = require('./routes/wallRoute.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/walls', wallRouter);

// Connect to MongoDB
connect().catch(err => console.error(err))

async function connect() {
  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  console.log('Connected to MongoDB')
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
  res.render('404')
});

// error handler
// TODO: Remove in deployement
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
