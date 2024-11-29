const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        // Create a spy for Utils.calculateNumber
        spy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        // Restore the original method
        spy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
        sendPaymentRequestToApi(100, 20);

        // Check if the spy was called once
        expect(spy.calledOnce).to.be.true;

        // Check if the spy was called with the correct arguments
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct output to the console', () => {
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

        consoleSpy.restore();
    });
});