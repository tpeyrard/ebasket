var Delivery = require('./delivery');
var Discounter = require('./discounter');

function Site() {
    this.articles = [];
    this.carts = [];
    this.delivery = new Delivery();
    this.discounter = new Discounter();
}

Site.prototype.parse = function (toParse) {
    if (!isEmpty(toParse)) {
        this.articles = toParse.articles;
        this.carts = toParse.carts;
        this.delivery.feesFrom(toParse.delivery_fees)
        this.discounter.discountsFrom(toParse.discounts)
    }
    return this;
};

Site.prototype.priceOf = function (articleId) {
    var discounter = this.discounter;
    return this.articles
        .filter(function (article) {
            return article.id == articleId
        })
        .map(function (article) {
            return discounter.applyDiscount(article)
        })[0];
};

Site.prototype.chargeForDelivery = function (prices) {
    var pricesWithFees = {};
    for (var price in prices) {
        pricesWithFees[price] = prices[price] + this.delivery.feesFor(prices[price])
    }
    return pricesWithFees
};


Site.prototype.getArticles = function () {
    return this.articles
};

Site.prototype.getCarts = function () {
    return this.carts
};

function isEmpty(jsonContent) {
    return Object.keys(jsonContent).length === 0 && jsonContent.constructor === Object
}

module.exports = Site;
