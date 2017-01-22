function Parser() {
	this.articles = []
}

function isEmpty(jsonContent) {
	return Object.keys(jsonContent).length === 0 && jsonContent.constructor === Object
}

Parser.prototype.parse = function(toParse){
	if (!isEmpty(toParse)) {
		this.articles = toParse.articles
	}
	return this;
}

Parser.prototype.getArticles = function() {
	return this.articles
};


module.exports = Parser;