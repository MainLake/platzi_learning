const { exec, spawn } = require("node:child_process");

function ls() {
    exec("ls -la", (error, stdout, stderr) => {
        if(error) {
            console.log("Ha ocurrido un error!!");
            return;   
        }
        console.log(stdout);
    })
}

// ls();

let proceso = spawn('ls', ['-la']);

proceso.stdout.on('data', (data) => {
    console.log(data.toString());
});

// Salir del proceso
proceso.on('exit', () => {
    console.log("El proceso termino!!")
})