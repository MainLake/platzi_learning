const express = require('express');
const functionIndexRouter = require('./routes/index.router');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send("Hola mi server en express").end();
});

functionIndexRouter(app);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}/`);
});
