var Delivery = require('./delivery');

function Site() {
	this.articles = [];
	this.carts = [];
	this.delivery = new Delivery();
}

Site.prototype.isEmpty = function () {
    return this.articles.length === 0 || this.carts.length === 0
};

Site.prototype.parse = function(toParse){
	if (!isEmpty(toParse)) {
		this.articles = toParse.articles;
		this.carts = toParse.carts;
		this.delivery.feesFrom(toParse.delivery_fees)
	}
	return this;
};

Site.prototype.priceOf = function(articleId){
  return this.articles.filter(
      function(data){ return data.id == articleId }
  )[0].price;
};

Site.prototype.chargeForDelivery = function(prices) {
    var pricesWithFees = {};
    for (var price in prices){
        pricesWithFees[price] = prices[price] + this.delivery.feesFor(prices[price])
    }
    return pricesWithFees
};


Site.prototype.getArticles = function() {
	return this.articles
};

Site.prototype.getCarts = function() {
	return this.carts
};

function isEmpty(jsonContent) {
    return Object.keys(jsonContent).length === 0 && jsonContent.constructor === Object
}

module.exports = Site;
