// const { Router } = require('express');
const router = require('./productos.router');

// const indexRouter = Router();

function functionIndexRouter(app) {
  app.use(router);
}

module.exports = functionIndexRouter;


