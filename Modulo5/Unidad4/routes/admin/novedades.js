var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("admin/novedades", {
    layout: "admin/layout",
    usuario: req.session.usuario,
  });
});

module.exports = router;
