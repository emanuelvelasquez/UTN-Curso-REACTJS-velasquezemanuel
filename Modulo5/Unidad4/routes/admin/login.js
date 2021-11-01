var express = require("express");
var router = express.Router();
var usuariosModel = require("../../models/usuariosModel");

router.get("/", function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

//login post function
router.post("/", async function (req, res, next) {
  try {
    var user = req.body.user;
    var pass = req.body.pass;
    var data = await usuariosModel.getUserByNameAndPassword(user, pass);
    if (data) {
      req.session.id_usuario = data.id_user;
      req.session.usuario = data.user;
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//logout function
router.get("/logout", async function (req, res, next) {
  req.session.destroy();
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

module.exports = router;
