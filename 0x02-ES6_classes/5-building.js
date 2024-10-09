class Building {
    constructor(sqft) {
      this._sqft = sqft;
  
      // Check if this is an instance of a class that extends Building
      if (this.constructor !== Building) {
        if (typeof this.evacuationWarningMessage !== 'function') {
          throw new Error('Class extending Building must override evacuationWarningMessage');
        }
      }
    }
  
    get sqft() {
      return this._sqft;
    }
  }
  
  export default Building;