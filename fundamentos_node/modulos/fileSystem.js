const fs = require('node:fs');

// Obtener la ruta raiz del programa actual __dirname
console.log(__dirname);

// Leer un archivo en node
function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        if(error) {
            console.log(error);
            return;
        }
        console.log(data.toString());
    });
}

// Escritura de un nuevo archivo
function escritura(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (error) => {
        if(error) {
            console.log(error);
            return;
        }
        console.log("Se ha creado y escrito el archivo")
    });
}

function eliminar(ruta, cb) {
    fs.unlink(ruta, cb)
}

// leer(`${__dirname}/texto.txt`);
// escritura(`${__dirname}/texto1.txt`, "Este es un mensaje que se escribe aqui");
eliminar(`${__dirname}/texto1.txt`, (error) => {
    if(error) {
        console.log("Ha ocurrido un error!!");
        return;
    }
    console.log("Se ha eliminado el archivo");
});