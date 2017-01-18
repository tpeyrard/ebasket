function Cart(items) {
	this._items = items;
}

Cart.prototype.checkout = function() {
	return 0;
};


module.exports = Cart;