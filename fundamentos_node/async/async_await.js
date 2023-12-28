// Funciones asincronas, estas reciben un callback
async function hola(nombre) {
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

async function main() {
  let nombre = await hola("Juan");
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
  console.log("Terminando proceso");
}

console.log("Iniciando programa: ");

main();
