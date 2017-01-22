var Site = require('./site');

function Cart(articlesAndCarts) {
	this.site = new Site().parse(articlesAndCarts)
}

function isEmpty(jsonContent) {
	return Object.keys(jsonContent).length === 0 && jsonContent.constructor === Object
}

Cart.prototype.checkout = function() {
	if (this.site.isEmpty()) {
		return 0
	}

	var price = 0
	var articles = this.site.getArticles()
	var cart = this.site.getCarts()[0]
	for (item in cart.items) {
		price += item.quantity * 0
	}

	return price;
};


module.exports = Cart;