const { Router } = require('express');

const ProductosServicio = require('../services/productos.service');

const router = Router();
const servicio = new ProductosServicio();

router.get('/', (request, response) => {
  const productos = servicio.find();
  response.json(productos).end();
});

router.get('/:idProducto', (request, response) => {
  const { idProducto } = request.params;
  const producto = servicio.findOne(idProducto)

  if(!producto) {
    return response.status(404).json({
      mensaje: "Producto no encontrado"
    }).end();
  }

  return response.json(producto).end();
});

router.post('/', (request, response) => {
  const data = request.body;

  response.json({
    mensaje: "creado",
    data: data
  }).end()

});

router.patch('/:idProducto', (request, response) => {
  const { idProducto } = request.params;
  const data = request.body;

  response.json({
    mensaje: "modificado",
    data: data,
    id: idProducto
  })

});

router.delete('/:idProducto', (request, response) => {
  const idProducto = request.params;
  response.json({
    mensaje: "eliminado",
    id: idProducto
  }).end();
});



module.exports = router;

