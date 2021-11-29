var express = require("express");
var router = express.Router();
var dbModel = require("../../models/dbModel");

//listado de canciones
router.get("/", async function (req, res) {
  var canciones = await dbModel.getListaCanciones();
  res.render("admin/canciones/listado", {
    listado: canciones,
    title: "Listado de Canciones",
  });
});

router.get("/detalle/:id_cancion", async function (req, res) {
  var cancion = await dbModel.getCancion(req.params.id_cancion);
  var artista = (await dbModel.getArtista(cancion.id_artista)).nombre;
  var genero = (await dbModel.getGenero(cancion.id_genero)).nombre;
  res.render("admin/canciones/detalle", {
    nombre: cancion.nombre,
    descripcion: cancion.descripcion,
    artista,
    genero,
  });
});

router.get("/insert", async function (req, res) {
  res.render("admin/canciones/insert", {
    artistas: await dbModel.getListaArtitas(),
    generos: await dbModel.getListaGeneros(),
  });
});

router.post("/insert", async function (req, res) {
  try {
    var cancion = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      id_artista: req.body.id_artista,
      id_genero: req.body.id_genero,
    };
    await dbModel.insertCancion(cancion);
    res.redirect("/admin/canciones");
  } catch (error) {
    res.render("admin/canciones/insert", {
      msgError: "Error al agregar una Cancion, refrescar la pagina.",
      artistas: await dbModel.getListaArtitas(),
      generos: await dbModel.getListaGeneros(),
    });
  }
});
//modificacion de canciones
router.get("/modificar/:id_cancion", async function (req, res) {
  var cancion = await dbModel.getCancion(req.params.id_cancion);
  cancion.artistas = await dbModel.getListaArtitas();
  (cancion.generos = await dbModel.getListaGeneros()),
    res.render("admin/canciones/modificar", cancion);
});

router.post("/modificar", async function (req, res) {
  var cancion = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    id_artista: req.body.id_artista,
    id_genero: req.body.id_genero,
  };
  var row = await dbModel.updateCancion(cancion, req.body.id_cancion);
  res.redirect("/admin/canciones");
});
//Eliminarcanciones
router.get("/elimina/:id_cancion", async function (req, res) {
  var row = await dbModel.deleteCancion(req.params.id_cancion);
  res.redirect("/admin/canciones");
});

module.exports = router;
