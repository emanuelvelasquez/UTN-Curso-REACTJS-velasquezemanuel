var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(!req.session.canciones){
    req.session.canciones=[]
  }
  res.render('canciones',{
    canciones: req.session.canciones
  });
});

//post para crear objeto con la info de la cancion
router.post('/', (req, res)=>{

  var cancion = {
    nombre:req.body.nombre,
    artista:req.body.artista,
    año:req.body.año
  }

  req.session.canciones.push(cancion);
 
  res.redirect('/canciones')
})

router.get('/limpiar',(req,res)=>{
  req.session.canciones=[]
  res.redirect('/canciones')
})

module.exports = router;
