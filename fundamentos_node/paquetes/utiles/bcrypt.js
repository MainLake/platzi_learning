const bcrypt = require('bcrypt');

const password = "TxRz182212991634@";

bcrypt.hash(password, 5, (error, hash) => {
    if(error) {
        console.log("Ha ocurrido un error!!");
        return;
    }
    console.log(hash);
    bcrypt.compare(password, hash, (error, value) => {
        if(error) {
            console.log("Ha ocurrido un error!!");
            return;
        }
        console.log("Las contrasenas son iguales?: ", value);
    });
});