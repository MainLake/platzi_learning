const http = require("node:http");

function router(request, response) {
    console.log("Nueva peticion");
 
    switch(request.url) {
        case "/hola":
            response.write("Hola mundo");
            response.end(); 
            break;
        default: 
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write("Ruta no encontrada");
            response.end();
            break;
    }
}

http.createServer(router).listen(3000);