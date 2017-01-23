function Discounter() {
    this.discounts = []
}

Discounter.prototype.discountsFrom = function (discounts) {
    this.discounts = discounts;
};

Discounter.prototype.applyDiscount = function (article) {
    for (var discount in this.discounts){
        if(this.discounts[discount].article_id == article.id){
            return article.price - this.discounts[discount].value
        }
    }
    return article.price
};

module.exports = Discounter;