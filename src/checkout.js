var Site = require('./site');

function Checkout(articlesAndCheckouts) {
	this.site = new Site().parse(articlesAndCheckouts)
}

Checkout.prototype.compute = function() {
	if (this.site.isEmpty()) {
		return 0
	}

	var price = 0
	var articles = this.site.getArticles()
	var cart = this.site.getCarts()[0]
	for (item in cart.items) {
		price += cart.items[item].quantity * this.site.priceOf(cart.items[item].article_id)
	}

	return price;
};


module.exports = Checkout;