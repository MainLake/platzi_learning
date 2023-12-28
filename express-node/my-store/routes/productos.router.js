const { Router } = require('express');
let { productos } = require('../db/db');

const router = Router();


router.get('/productos', (request, response) => {
  response.json(productos).end();
});

router.get('/productos/:idProducto', (request, response) => {
  const { idProducto } = request.params

  const producto = productos.find( elemento => elemento.id === idProducto);

  if(!producto) {
    response.status(404).json({
      mensaje: "producto no encontrado"
    }).end();
  }

  response.json(producto).end();

});

router.post('/productos', (request, response) => {

});

router.put('/productos/:idProducto', (request, response) => {

});

router.delete('/productos/:idProducto', (request, response) => {

  const { idProducto } = request.params;

  const existeProducto = productos.some( elemento => elemento.id === idProducto );

  if (!existeProducto) response.status(404).json({mensaje: "Producto no encontrado"}).end();

  productos = productos.filter(producto => producto.id !== idProducto);

  response.status(204).end();

});

module.exports = router;
