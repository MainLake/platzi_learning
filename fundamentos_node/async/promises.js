// Funciones asincronas, estas reciben un callback
function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola ", nombre);
      // El callback puede llevar parametros que podemos manejar
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios ", nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hablando con ", nombre, "...");
      resolve(nombre);
    }, 1000);
  });
}

console.log("Iniciando programa: ");

hola("Juan")
  .then((nombre) => hablar(nombre))
  .then((nombre) => adios(nombre))
  .then((nombre) => console.log("Proceso terminado"))
  .catch(error => {
    console.log("Ha ocurrido un error!!");
    console.log(error);
  });
