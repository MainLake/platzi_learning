const saludar = require('./modulo');

// Si importamos de un modulo que exporta un solo elemento como 
// una funcion podemos llamarla directamente
// saludar();

// por el contrario si exportamos varias cosas tenemos un objeto que contiene
// todas nuestras exportaciones
saludar.saludar();
console.log(saludar.saludo);