const { faker } = require('@faker-js/faker');

class ProductoServicio {
  constructor() {
    this._productos = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this._productos.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
      });
    }
  }

  create() {}

  find() {
    return this._productos;
  }

  findOne(idProducto) {

    return this._productos.find(producto => producto.id === idProducto);

  }

  update() {}

  delete() {}
}

module.exports = ProductoServicio;
