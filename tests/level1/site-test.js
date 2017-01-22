var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var Site = require('./../../src/site');

describe('Site', function() {

	it('gets articles from data', function() {
		var site = new Site()

		site.parse({"articles": [{ "id": 1, "name": "water", "price": 100 }],
			"carts": [{"id": 1, "items": [{ "article_id": 1, "quantity": 6 }]}]});

		expect(JSON.stringify(site.getArticles())).to.equal(JSON.stringify([{ "id": 1, "name": "water", "price": 100 }]));
	});

	it('gets carts from data', function() {
		var site = new Site()

		site.parse({"articles": [{ "id": 1, "name": "water", "price": 100 }],
			"carts": [{"id": 1, "items": [{ "article_id": 1, "quantity": 6 }]}]});

		expect(JSON.stringify(site.getCarts())).to.equal(JSON.stringify([{"id": 1, "items": [{ "article_id": 1, "quantity": 6 }]}]));
	});

	it('finds article\'s price by id', function() {
		var site = new Site()

		site.parse({"articles": [{ "id": 1, "name": "water", "price": 100 },{ "id": 2, "name": "honey", "price": 200 }]});

		expect(site.priceOf(2)).to.equal(200);
	});

});