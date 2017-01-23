var Site = require('./site');

function Checkout(articlesAndCheckouts) {
	this.site = new Site().parse(articlesAndCheckouts)
}

Checkout.prototype.compute = function() {
	if (this.site.isEmpty()) {
		return 0
	}

	var prices = {};
	var carts = this.site.getCarts();
	for(var cart in carts) {
		var price = 0;
		for (var item in carts[cart].items) {
			price += carts[cart].items[item].quantity * this.site.priceOf(carts[cart].items[item].article_id)
		}
		prices[carts[cart].id] = price
	}

	return generateOutput(carts, prices)
};


function generateOutput(carts, prices) {
	var output = {
		carts: []
	};

	carts.map(function(item) {       
		output.carts.push({ 
			"id" : item.id,
			"total"  : prices[item.id]
		});
	});

	return output;
}

module.exports = Checkout;