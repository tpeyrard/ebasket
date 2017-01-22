var Parser = require('./parser');

function Cart(articlesAndCarts) {
	this.content = articlesAndCarts
	this.parser = new Parser()
}

function isEmpty(jsonContent) {
	return Object.keys(jsonContent).length === 0 && jsonContent.constructor === Object
}

Cart.prototype.checkout = function() {
	if (isEmpty(this.content)) {
		return 0
	}
	
	quantity = this.content.carts[0].items[0].quantity
	price = this.parser.parse(this.content).getArticles()[0].price

	return quantity * price;
};


module.exports = Cart;