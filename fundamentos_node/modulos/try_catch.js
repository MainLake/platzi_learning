// Control de errores
function sumar() {
    console.log(2 + g);
}

// Si ejecutamos la funcion sumar por si sola, el programa se rompera
// Todas las instrucciones que se debieron ejecutar depues de codigo que tiene
// el error no se ejecutara

try {
    sumar();
} catch(error) {
    console.log("Ha ocurrido un error");
    console.log(error);
}

console.log("Continuando con el programa")