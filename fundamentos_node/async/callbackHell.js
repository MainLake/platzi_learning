// Funciones asincronas, estas reciben un callback
function hola(nombre, callback) {
  setTimeout(() => {
    console.log("Hola ", nombre);
    // El callback puede llevar parametros que podemos manejar
    callback(nombre);
  }, 1000);
}

function hablar(nombre, callback) {
  setTimeout(() => {
    console.log("Hablando con ", nombre, " ...");
    callback(nombre);
  }, 1000);
}

function conversar(nombre, veces, callback) {
    if(veces === 0) {
        callback(nombre);
        return
    }
    hablar(nombre, () => {
        conversar(nombre, --veces, callback);
    });
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log("Adios ", nombre);
    callback();
  }, 1000);
}

console.log("Iniciando programa: ");

hola("Juan", (nombre) => {
    conversar(nombre, 3, (nombre) => {
        adios(nombre, () => {
            console.log("Proceso terminado!!");
        });
    });
});
