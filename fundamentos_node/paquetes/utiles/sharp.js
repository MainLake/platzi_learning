const sharp = require('sharp');

sharp('./imagen.png')
    .resize(80)
    .toFile("imagen-resized.png");