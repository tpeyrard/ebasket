function Site() {
	this.articles = [];
	this.carts = [];
}

Site.prototype.isEmpty = function(jsonContent) {
	return this.articles.length === 0 || this.carts.length === 0
}

function isEmpty(jsonContent) {
	return Object.keys(jsonContent).length === 0 && jsonContent.constructor === Object
}

Site.prototype.parse = function(toParse){
	if (!isEmpty(toParse)) {
		this.articles = toParse.articles
		this.carts = toParse.carts
	}
	return this;
}

Site.prototype.priceOf = function(articleId){
  return this.articles.filter(
      function(data){ return data.id == articleId }
  )[0].price;
}

Site.prototype.getArticles = function() {
	return this.articles
};

Site.prototype.getCarts = function() {
	return this.carts
};

module.exports = Site;