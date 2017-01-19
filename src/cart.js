function Cart(articlesAndCarts) {
	this.content = articlesAndCarts;
}

function isEmpty(jsonContent) {
	return Object.keys(jsonContent).length === 0 && jsonContent.constructor === Object
}

Cart.prototype.checkout = function() {
	if (isEmpty(this.content)) {
		return 0
	}
	
	quantity = this.content.carts[0].items[0].quantity
	price = this.content.articles[0].price

	return quantity * price;
};


module.exports = Cart;