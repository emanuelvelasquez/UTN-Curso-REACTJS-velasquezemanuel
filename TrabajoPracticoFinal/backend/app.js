var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var validator = require("validator");
const fileUpload = require("express-fileupload");
var cors = require("cors");

require("dotenv").config();

var indexRouter = require("./routes/index");
var contactoRouter = require("./routes/contacto");
var acercaRouter = require("./routes/acerca");
var loginRouter = require("./routes/admin/login");
var registerRouter = require("./routes/admin/register");
var cancionesRouter = require("./routes/admin/canciones");
var artistasRouter = require("./routes/admin/artistas");
var generosRouter = require("./routes/admin/generos");
var apiRouter = require("./routes/api");

var app = express();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

var hbs = require("hbs");

hbs.registerHelper("select", function (options, idActual, value, text) {
  var optionsHtml = options.map(function (item) {
    return new hbs.SafeString(
      `<option value="${item[value]}" ${
        idActual == item[value] ? "selected" : ""
      }>${item[text]}</option>`
    );
  });
  return optionsHtml;
});

app.use(session({ resave: true, secret: "123456", saveUninitialized: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

secure = async (req, res, next) => {
  try {
    if (req.session.id_usuario) {
      app.locals.logueado = true;
      next();
    } else {
      res.render("admin/login", {
        msgSuccess: "Debes Iniciar Sesion",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

logout = async (req, res, next) => {
  if (req.originalUrl.indexOf("logout") > 0) {
    app.locals.logueado = false;
  }
  next();
};

app.use("/", indexRouter);
app.use("/contacto", contactoRouter);
app.use("/acerca", acercaRouter);
app.use("/admin/login", logout, loginRouter);
app.use("/admin/register", registerRouter);
app.use("/admin/canciones", secure, cancionesRouter);
app.use("/admin/artistas", secure, artistasRouter);
app.use("/admin/generos", secure, generosRouter);

//API REST
app.use("/api", cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
