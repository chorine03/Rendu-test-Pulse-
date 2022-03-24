var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var parkingRouter = require('./routes/parking');
var reservationRouter = require('./routes/reservation');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/parking', parkingRouter);
app.use('/reservation', reservationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



//configure bodyparser to hande the post requests
// Middleware
app.use(express.json());
//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//connect to mongoose
const dbPath = 'mongodb://localhost/parking';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


