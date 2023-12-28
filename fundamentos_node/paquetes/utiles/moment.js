const moment = require('moment');

const fecha = moment();

// Modulo que nos permite tener un manejo de las fechas y horas de forma mas precisa
console.log(fecha.toString());

// Formatear como vemos las fechas o las horas
console.log(fecha.format('YYYY/MM/DD - HH:mm'));
