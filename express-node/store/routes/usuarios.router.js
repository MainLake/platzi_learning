const { Router } = require('express');
const { faker } = require('@faker-js/faker');

const router = Router();


router.get('/', (request, response) => {
    const usuarios = [];
    const { size } = request.query;
    const limit = size || 10;

    for(let i = 0; i < limit; i++) {
        usuarios.push({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email()
        });
    }

    response.json(usuarios).end();

});

router.get('/:idUsuario', (request, response) => {
    const { idUsuario } = request.params;

    response.json({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        id: idUsuario
    }).end();

});

module.exports = router;
