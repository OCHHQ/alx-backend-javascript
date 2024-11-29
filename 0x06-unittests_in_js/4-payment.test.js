const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let stub, consoleSpy;

    beforeEach(() => {
        // Stub Utils.calculateNumber
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the original methods
        stub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments and return a stubbed value', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify that the stub is called with the correct arguments
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;

        // Verify that console.log logs the stubbed value
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});