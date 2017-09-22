var express = require('express');
var path = require('path');

var mongoose = require('mongoose');
var morgan       = require('morgan');

var bodyParser   = require('body-parser');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./server/config'); // get our config file

var app = express();

// configuration ===============================================================
mongoose.connect(config.url); // connect to our database
app.set('superSecret', config.secret); // secret variable

// Get our API routes
const api = require('./server/routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use morgan to log requests to the console
app.use(morgan('dev'));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
