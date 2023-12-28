const fs = require("node:fs");

// Creacion de stream
let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding("utf-8");

readableStream.on('data', (chunk) => {
    data += chunk;
});

readableStream.on('end', () => {
    console.log(data);
})