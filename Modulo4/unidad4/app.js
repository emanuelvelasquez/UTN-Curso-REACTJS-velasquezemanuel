var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(session({
  secret:'Sami2318',
  resave:false,
  saveUninitialized:true,
  
}))

// app.use((req,res,next)=>{
//   if(!req.session.vistas){
//     req.session.vistas={}
//   }
//   if(!req.session.vistas[req.originalUrl]){
//     req.session.vistas[req.originalUrl]=1
//   }else{
//     req.session.vistas[req.originalUrl]++
//   }
//   next();
// })

var indexRouter = require('./routes/index');
var cancionesRouter = require('./routes/canciones');
var contactoRouter = require('./routes/contacto');
var acercaRouter = require('./routes/acerca');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/canciones', cancionesRouter);
app.use('/contacto',contactoRouter)
app.use('/acerca',acercaRouter)


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

module.exports = app;
