const crypto = require("crypto");

class FigurinhaEntity {
  constructor(carrer) {
    this.id = crypto.randomUUID();
    this.name = carrer.name;
    this.country = carrer.country;
    this.position = carrer.position;
    this.number = carrer.number;
    this.age = carrer.age;
  }
  validate() {
    if (!this.name) {
      throw new Error("O nome precisa ser preenchido");
    }
    if (!this.country) {
      throw new Error("O país precisa ser preenchido");
    }
    if (!this.position) {
      throw new Error("A posição precisa ser preenchida");
    }
    if (!this.number || this.number <= 0) {
      throw new Error("O número da camisa não é valido");
    }
    if (!this.age || this.age < 0) {
      throw new Error("A idade não é valida");
    }
  }
  getFigurinha() {
    return {
      id: this.id,
      name: this.name,
      country: this.country,
      position: this.position,
      number: this.number,
      age: this.age,
    };
  }
}

module.exports = FigurinhaEntity;
