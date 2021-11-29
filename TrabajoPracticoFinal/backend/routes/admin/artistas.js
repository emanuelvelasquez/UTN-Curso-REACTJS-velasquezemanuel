var express = require("express");
var router = express.Router();
var dbModel = require("../../models/dbModel");

//listado de artistas
router.get("/", async function (req, res) {
  var artistas = await dbModel.getListaArtitas();
  res.render("admin/artistas/listado", {
    artistas,
  });
});

router.get("/detalle/:id_artista", async function (req, res) {
  var artista = await dbModel.getArtista(req.params.id_artista);
  res.render("admin/artistas/detalle", {
    nombre: artista.nombre,
    descripcion: artista.descripcion,
  });
});

router.get("/insert", async function (req, res) {
  res.render("admin/artistas/insert", {
    select: false,
    tipo: "artistas",
  });
});

router.post("/insert", async function (req, res) {
  try {
    var artista = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    };
    await dbModel.insertArtista(artista);
    res.redirect("/admin/artistas");
  } catch (error) {
    res.render("admin/artistas/insert", {
      msgError:
        "Error al agregar un Artista, asegurarse de llenar todos los campos",
    });
  }
});

router.get("/modificar/:id_artista", async function (req, res) {
  var artista = await dbModel.getArtista(req.params.id_artista);
  res.render("admin/artistas/modificar", artista);
});

router.post("/modificar", async function (req, res) {
  try {
    var artista = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    };
    await dbModel.updateArtista(artista, req.body.id_artista);
    res.redirect("/admin/artistas");
  } catch (error) {
    req.body.msgError = "Error al agregar un Art";
    res.redirect(`/admin/artistas/mo dificar/:${req.body.id_artista}`);
  }
});
//eliminar artista
router.get("/eliminar/:id_artista", async function (req, res) {
  var row = await dbModel.deleteArtista(req.params.id_artista);
  if (row == "referenciado") {
    var artistas = await dbModel.getListaArtitas();
    res.locals.msgError =
      "No se puede eliminar este artista que esta referenciado en una Cancion";
    res.render("admin/artistas/listado", { artistas });
  } else {
    res.redirect("/admin/artistas");
  }
});

module.exports = router;
