'use strict'

//Dependencias
var express = require('express');
var path = require('path');
var app = express(); // inicializa la aplicacion expres
//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logger
var logger = require('morgan');
app.use(logger('dev'));
//cookie / sessions
var cookieParser = require('cookie-parser');
app.use(cookieParser());

//layout setup
var exphbs = require('express-handlebars');
var nib = require('nib');

//Handelbars setups
app.engine('nib', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + 'views/partials'

}));

// stylus setup
var stylus = require('stylus');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));


//Routes
var routes = require('./routes/index');
var users = require('./routes/users');
app.use('/', routes);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




//inicializa el servidor
if (!!module.parent)
  module.exports = app;
else
  app.listen(3000);
