const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const  history  = require('connect-history-api-fallback')


const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, 'public'));
// app.use(staticFileMiddleware);
app.use(history({
  // index: 'index.html',
  // verbose: true,
  rewrites: [
    {
      from: '/^\/api\/auth\/(?:([^\/]+?))\/(?:([^\/]+?))\/?$/i',
      to: function(context) {
          return context.parsedUrl.path
      }
    }
  ]
}));
app.use(staticFileMiddleware);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.set('view engine', 'html');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', authRouter);

// app.use('/api/auth/:id/:authkey', authRouter);



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
  res.send('error');
});

module.exports = app;
