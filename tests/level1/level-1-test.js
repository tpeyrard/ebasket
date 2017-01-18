var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var Cart = require('./../../src/cart');

describe('Level1', function() {

	it('checkout() should return 0 when no items are ordered', function() {
		var cart = new Cart([]);
		expect(cart.checkout()).to.equal(0);
	});
});
