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

	quantity = this.site.getCarts()[0].items[0].quantity
	price = this.site.getArticles()[0].price

	return quantity * price;
};


module.exports = Cart;