var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var Parser = require('./../../src/parser');

describe('Parser', function() {

	it('The parser gets articles from data', function() {
		var parser = new Parser()

		parser.parse({"articles": [{ "id": 1, "name": "water", "price": 100 }],
			"Carts": [{"id": 1, "items": [{ "article_id": 1, "quantity": 6 }]}]});

		expect(JSON.stringify(parser.getArticles())).to.equal(JSON.stringify([{ "id": 1, "name": "water", "price": 100 }]));
	});

});