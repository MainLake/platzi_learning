const { Router } = require('express');
const { faker } = require('@faker-js/faker');

const router = Router();

router.get('/', (request, response) => {
  const { size } = request.query;
  const categorias = [];
  const limit = size || 1;

  for(let i = 0; i < limit; i++) {
    categorias.push({
      name: faker.commerce.department(),
      id: faker.string.uuid()
    });
  }

  response.json(categorias).end();

});


router.get('/:idCategoria', (request, response) => {
  const { idCategoria } = request.params;

  response.json({
    name: faker.commerce.department(),
    id: idCategoria
  }).end()

});

module.exports = router;
