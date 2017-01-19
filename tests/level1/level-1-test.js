var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var Cart = require('./../../src/cart');

describe('Level1', function() {

	it('checkout() should return 0 when no items are ordered', function() {
		var cart = new Cart({});
		expect(cart.checkout()).to.equal(0);
	});


	it('checkout() should return the correct amount for one cart with one article', function() {
		var cart = new Cart({
			"articles": [
			{ "id": 1, "name": "water", "price": 100 }
			],
			"carts": [
			{
				"id": 1,
				"items": [
				{ "article_id": 1, "quantity": 6 }
				]
			}
			]
		});
		expect(cart.checkout()).to.equal(600);
	});	
});