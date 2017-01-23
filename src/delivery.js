function Delivery() {
    this.fees = []
}

Delivery.prototype.feesFrom = function(fees){
    this.fees = fees;
};

Delivery.prototype.feesFor = function(price){
    for (var fee in this.fees){
        var rule = this.fees[fee].eligible_transaction_volume;
        if(rule.min_price <= price && price < rule.max_price){
            return this.fees[fee].price;
        }
    }
    return 0;
};

module.exports = Delivery;