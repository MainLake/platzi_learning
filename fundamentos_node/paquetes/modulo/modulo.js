function saludar() {
    console.log("Hola mundo");
}

const saludo = "Hola a todos";

// Si tenemos solo una cosa que exportar podemos hacerlo de esta manear
// module.exports = saludar;

// Si tenemos que exportar varias cosas de un mismo archivo podemos
// hacer lo siguiente
module.exports = {
    saludar,
    saludo
}