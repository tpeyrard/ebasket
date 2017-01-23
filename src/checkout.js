var Site = require('./site');

function Checkout(articlesAndCheckouts) {
	this.site = new Site().parse(articlesAndCheckouts)
}

Checkout.prototype.compute = function() {
	var prices = {};
	var carts = this.site.getCarts();
	for(var cartId in carts) {
		var price = 0;
        var cart = carts[cartId];
        for (var item in cart.items) {
            price += cart.items[item].quantity * this.site.priceOf(cart.items[item].article_id)
		}
		prices[cart.id] = price
	}

	var pricesWithDeliveryFees = this.site.chargeForDelivery(prices)

	return generateOutput(carts, pricesWithDeliveryFees)
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