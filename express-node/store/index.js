const express = require('express');
const indexRouter = require('./routes/index.router');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hola mundo').end();
});

indexRouter(app);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});

