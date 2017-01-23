function Discounter() {
    this.discounts = []
}

Discounter.prototype.discountsFrom = function (discounts) {
    this.discounts = discounts;
};

Discounter.prototype.applyDiscount = function (article) {
    for (var discountId in this.discounts) {
        var discount = this.discounts[discountId];
        if (discount.article_id == article.id) {
            // I could hide this if statement in a 'discount' object
            if ('amount' === discount.type)
                return article.price - discount.value
            else
                return Math.floor(article.price -(article.price * (discount.value / 100)))
        }
    }
    return article.price
};

module.exports = Discounter;