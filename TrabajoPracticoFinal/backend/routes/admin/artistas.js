var dbModel = require("../../models/dbModel");
var express = require("express");
var router = express.Router();
var util = require("util");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

var uploadImg = util.promisify(cloudinary.uploader.upload);
var destroyImg = util.promisify(cloudinary.uploader.destroy);

//listado de artistas
router.get("/", async function (req, res) {
  var artistas = await dbModel.getListaArtitas();
  res.render("admin/artistas/listado", {
    artistas,
  });
});

router.get("/detalle/:id_artista", async function (req, res) {
  var artista = await dbModel.getArtista(req.params.id_artista);

  var image = artista.id_img
    ? await cloudinary.image(artista.id_img, {
        width: 100,
        height: 100,
        crop: "fill",
      })
    : null;

  res.render("admin/artistas/detalle", {
    ...artista,
    image,
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
    var id_img = "";

    if (req.files || Object.keys(req.files).length !== 0) {
      var id_img = (await uploadImg(req.files.imagen.tempFilePath)).public_id;
    }

    var artista = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      id_img: id_img,
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
  var image = artista.id_img
    ? await cloudinary.image(artista.id_img, {
        width: 100,
        height: 100,
        crop: "fill",
      })
    : null;
  res.render("admin/artistas/modificar", { ...artista, image });
});

router.post("/modificar", async function (req, res) {
  try {
    var id_img = "";

    if (req.files != null) {
      req.body.id_img != "" && (await destroyImg(req.body.id_img));
      var id_img = (await uploadImg(req.files.imagen.tempFilePath)).public_id;
    } else {
      id_img = req.body.id_img;
    }

    var artista = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      id_img,
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
  var id_img = (await dbModel.getArtista(req.params.id_artista)).id_img;

  await destroyImg(id_img);

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
