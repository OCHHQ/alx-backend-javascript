const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return the sum of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
            assert.strictEqual(calculateNumber('SUM', -1.4, -3.5), -4);
        });
    });

    describe('SUBTRACT', () => {
        it('should return the subtraction of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.5), 2);
        });
    });

    describe('DIVIDE', () => {
        it('should return the division of rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
            assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.4), 5);
        });

        it('should return "Error" when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid type', () => {
            assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), {
                name: 'Error',
                message: 'Invalid type',
            });
        });
    });
});
