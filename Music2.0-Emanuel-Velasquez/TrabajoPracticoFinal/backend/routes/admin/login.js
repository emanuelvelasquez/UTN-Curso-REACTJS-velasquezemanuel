var express = require("express");
var router = express.Router();
var dbModel = require("../../models/dbModel");

router.get("/", function (req, res, next) {
  res.render("admin/login");
});

//login post function
router.post("/", async function (req, res, next) {
  try {
    var user = req.body.user;
    var pass = req.body.pass;
    var data = await dbModel.getUserByNameAndPassword(user, pass);
    if (data) {
      req.session.id_usuario = data.id_user;
      req.session.usuario = data.user;
      res.redirect("/admin/canciones");
    } else {
      res.render("admin/login", {
        msgError: "Usuario o clave incorrecto",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//logout function
router.get("/logout", async function (req, res, next) {
  req.session.destroy();
  res.render("admin/login");
});

module.exports = router;
