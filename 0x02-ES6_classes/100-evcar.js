import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class (Car) constructor to initialize brand, motor, and color
    super(brand, motor, color);
    // Initialize the range attribute
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Return a new instance of the Car class with the same attributes
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
