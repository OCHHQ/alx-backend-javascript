class Airport {
    constructor(name, code) {
      // Store the parameters in underscore-prefixed attributes
      this._name = name;
      this._code = code;
    }
  
    // Override the toString method
    toString() {
      return `[object ${this._code}]`;
    }
  }
  
  export default Airport;
  