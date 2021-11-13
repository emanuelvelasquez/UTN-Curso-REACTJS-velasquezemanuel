var express = require("express");
var router = express.Router();
var dbModel = require("../../models/dbModel");

//listado de generos
router.get("/", async function (req, res) {
  var generos = await dbModel.getListaGeneros();
  res.render("admin/generos/listado", {
    listado: generos,
  });
});

router.get("/detalle/:id_genero", async function (req, res) {
  var genero = await dbModel.getGenero(req.params.id_genero);
  res.render("admin/generos/detalle", {
    nombre: genero.nombre,
    descripcion: genero.descripcion,
  });
});

router.get("/insert", async function (req, res) {
  res.render("admin/generos/insert");
});

router.post("/insert", async function (req, res) {
  try {
    var genero = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    };
    await dbModel.insertGenero(genero);
    res.redirect("/admin/generos");
  } catch (error) {
    res.render("admin/generos/insert", {
      msgError: "Error al agregar un genero, refresque la pagina",
    });
  }
});

router.get("/modificar/:id_genero", async function (req, res) {
  var genero = await dbModel.getGenero(req.params.id_genero);
  res.render("admin/generos/modificar", genero);
});

router.post("/modificar", async function (req, res) {
  try {
    var genero = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    };
    await dbModel.updateGenero(genero, req.body.id_genero);
    res.redirect("/admin/generos");
  } catch (error) {
    res.locals.msgError = "Error al modificar el Genero, actualice la pagina";
    res.redirect(`/admin/generos`);
  }
});
//eliminar genero
router.get("/eliminar/:id_genero", async function (req, res) {
  var row = await dbModel.deleteGenero(req.params.id_genero);

  res.redirect("/admin/generos");
});

module.exports = router;
