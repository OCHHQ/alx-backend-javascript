const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Implement the cloneCar method using a Symbol
  [cloneSymbol]() {
    // Create a new instance of the current class (preserving the subclass if applicable)
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    // Call the Symbol clone method
    return this[cloneSymbol]();
  }
}

export default Car;
