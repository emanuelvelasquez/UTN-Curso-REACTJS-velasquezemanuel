var express = require('express');
var router = express.Router();
var pool =require('../db');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var empleados =[]
  await pool.query('select * from empleados').then((resultado)=>{
    empleados= resultado
  })

  res.render('index', {
    title: 'Index',
    empleados:empleados
  });

});

module.exports = router;
