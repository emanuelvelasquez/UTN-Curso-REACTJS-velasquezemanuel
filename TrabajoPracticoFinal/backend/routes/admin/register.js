var express = require("express");
var router = express.Router();
var dbModel = require("../../models/dbModel");
var validator = require("validator");
var app = require("../../app");

//registrarse
router.get("/", async function (req, res) {
  res.render("admin/register");
});

router.post("/", async function (req, res, next) {
  try {
    var passDiferentes = validator.equals(req.body.pass, req.body.pass1);
    var userExist = (await dbModel.getUser(req.body.user)).length > 0;
    if (!passDiferentes || userExist) {
      var msg = `${userExist ? "El usuario ingresado ya existe." : ""}${
        !passDiferentes ? " Las contraseñas ingresadas no coinciden." : ""
      }`;

      res.locals.msgError = msg;
      res.render("admin/register", req.body);
    } else {
      var result = await dbModel.insertUser({
        user: req.body.user,
        pass: req.body.pass,
      });
      res.render("admin/login", {
        msgSuccess: "Se registro al nuevo Usuario exitosamente!!",
      });
    }
  } catch (error) {
    res.render("admin/register", req.body);
  }
});
module.exports = router;
