
// Funciones asincronas, estas reciben un callback
function hola(nombre, callback) {
    setTimeout(() => {
        console.log("Hola ", nombre);
        // El callback puede llevar parametros que podemos manejar
        callback(nombre);
    }, 1000);
}

function adios(nombre, callback) {
    setTimeout(() => {
        console.log("Adios ", nombre);
        callback();
    }, 1000);
}

console.log("Iniciando programa: ")

hola("Juan", (nombre) => {
    adios(nombre, () => {
        console.log("Finalizando programa!!")
    });
});