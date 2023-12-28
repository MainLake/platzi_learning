const { constants } = require("node:buffer");
const os = require("node:os");

// Informacion de la arquitectura del sistema
console.log(os.arch());

// Informacion del tipo de sistema operatico
console.log(os.platform());

// Informacion de las cpu
console.table(os.cpus());

// Errores o senales del sistema
console.table(constants);

// Memoria libre en bytes
console.log(os.freemem());
function conversorBytesTo(bytes, type) {
    let convertion = 0;
    switch(type) {
        case "kb":
            convertion = bytes / 1024;
            break;
        case "mb":
            convertion = (bytes / 1024) / 1024;
            break;
        case "gb":
            convertion = ((bytes / 1024) / 1024) / 1024;
            break;
        default:
            return "NO SE ADMITE ESE TIPO DE CONVERSION!!"
    }
    return convertion;
}

// Memoria libre del sistema en gb
console.log(conversorBytesTo(os.freemem(), 'gb'));
