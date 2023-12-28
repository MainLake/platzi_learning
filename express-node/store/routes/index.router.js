const { Router } = require('express');

const productosRouter = require('./productos.router');
const usuariosRouter = require('./usuarios.router');
const categoriasRouter = require('./categorias.router');

const router = Router();

function indexRouter(app) {

  router.use('/productos', productosRouter);
  router.use('/usuarios', usuariosRouter);
  router.use('/categorias', categoriasRouter);

  app.use('/api/v1', router);

}

module.exports = indexRouter;
