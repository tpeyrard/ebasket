var chai = require('chai');
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
		expect(checkout.compute().carts[0].total).to.equal(600);
	});	

	it('should return the correct amount for one checkout with two articles', function() {
		var checkout = new Checkout({
			"articles": [
			{ "id": 1, "name": "water", "price": 100 },
			{ "id": 2, "name": "honey", "price": 200 }
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
		expect(JSON.stringify(checkout.compute())).to.equal(JSON.stringify({
			"carts": [{
				"id": 1,
				"total": 600
			}]
		}));
	});	

	it('generate the output for several articles and carts. Acceptance test', function () {
		var checkout = new Checkout ({
			"articles": [
			{ "id": 1, "name": "water", "price": 100 },
			{ "id": 2, "name": "honey", "price": 200 },
			{ "id": 3, "name": "mango", "price": 400 },
			{ "id": 4, "name": "tea", "price": 1000 }
			],
			"carts": [
			{
				"id": 1,
				"items": [
				{ "article_id": 1, "quantity": 6 },
				{ "article_id": 2, "quantity": 2 },
				{ "article_id": 4, "quantity": 1 }
				]
			},
			{
				"id": 2,
				"items": [
				{ "article_id": 2, "quantity": 1 },
				{ "article_id": 3, "quantity": 3 }
				]
			},
			{
				"id": 3,
				"items": []
			}
			]
		});

		expect(JSON.stringify(checkout.compute())).to.equal(JSON.stringify({
			"carts": [
			{
				"id": 1,
				"total": 2000
			},
			{
				"id": 2,
				"total": 1400
			},
			{
				"id": 3,
				"total": 0
			}
			]
		}));
	});
});