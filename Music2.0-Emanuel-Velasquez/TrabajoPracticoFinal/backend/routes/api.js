var express = require("express");
var router = express.Router();
var dbModel = require("../models/dbModel");

router.get("/canciones", async (req, res, next) => {
  let canciones = await dbModel.getVCanciones();
  res.json(canciones);
});

router.get("/canciones/artista/:id_artista", async (req, res, next) => {
  let canciones = await dbModel.getVCancionesByArtista(req.params.id_artista);
  res.json(canciones);
});

router.get("/canciones/genero/:id_genero", async (req, res, next) => {
  let canciones = await dbModel.getVCancionesByGenero(req.params.id_genero);
  res.json(canciones);
});

router.get("/artistas", async (req, res, next) => {
  let artistas = await dbModel.getListaArtitas();
  res.json(artistas);
});

router.get("/generos", async (req, res, next) => {
  let generos = await dbModel.getListaGeneros();
  res.json(generos);
});
module.exports = router;
