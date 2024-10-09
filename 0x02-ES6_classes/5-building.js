// understanding abstract class
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('square feet must be a number');
    }
    // store the sqft as a private attribute
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

    // eslint-disable-next-line class-methods-use-this
    evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  
}
