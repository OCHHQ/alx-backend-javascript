class HolbertonClass {
  constructor(size, location) {
    // Store the parameters in underscore-prefixed attributes
    this._size = size;
    this._location = location;
  }

  // Override the valueOf method for number conversion
  valueOf() {
    return this._size; // Return the size when casting to a number
  }

  // Override the toString method for string conversion
  toString() {
    return this._location; // Return the location when casting to a string
  }
}

export default HolbertonClass;
