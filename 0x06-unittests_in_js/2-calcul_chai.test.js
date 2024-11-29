const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return the sum of rounded numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
            expect(calculateNumber('SUM', -1.4, -3.5)).to.equal(-4);
        });
    });

    describe('SUBTRACT', () => {
        it('should return the subtraction of rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
            expect(calculateNumber('SUBTRACT', -1.4, -3.5)).to.equal(2);
        });
    });

    describe('DIVIDE', () => {
        it('should return the division of rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
            expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.be.closeTo(5, 0.001);
        });

        it('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid type', () => {
            expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid type');
        });
    });
});