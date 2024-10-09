import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw new TypeError('currency must be a Currency');

    this._amount = amount;
    this._currency = currency;
  }

  //  Getter for amount
  get amount() {
    return this._amount;
  }

  // setter for amount validation
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // currency getter
  get currency() {
    return this._currency;
  }

  // setter for currncy vaildation
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency Object');
    }
    this._currency = newCurrency;
  }

  // method to display price
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('both amount and conversion must be numbers');
    }
    return amount * conversionRate;
  }
}
// in javascript  typeof work to check primitive data type
// its cannot distinguish btw object types
// method to is display
