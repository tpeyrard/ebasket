var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var Checkout = require('./../../src/checkout');

describe('Level1', function() {

	it('should return 0 when no items are ordered', function() {
		var checkout = new Checkout({});
		expect(checkout.compute()).to.equal(0);
	});


	it('should return the correct amount for one checkout with one article', function() {
		var checkout = new Checkout({
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
		expect(checkout.compute()).to.equal(600);
	});	

	it('should return the correct amount for one checkout with two articles', function() {
		var checkout = new Checkout({
			"articles": [
			{ "id": 1, "name": "water", "price": 100 },
    		{ "id": 2, "name": "honey", "price": 200 },
			],
			"carts": [
			{
				"id": 1,
				"items": [
				{ "article_id": 1, "quantity": 2 },
				{ "article_id": 2, "quantity": 2 }
				]
			}
			]
		});
		expect(checkout.compute()).to.equal(600);
	});	
});