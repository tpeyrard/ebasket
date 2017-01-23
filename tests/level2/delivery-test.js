var chai = require('chai');
var expect = chai.expect;
var Checkout = require('./../../src/checkout');

describe('Delivery fees', function () {

    it('should should be charged for a volume between 0 and 1000', function () {
        var checkout = new Checkout({
            "articles": [
                { "id": 1, "name": "water", "price": 100 }
            ],
            "carts": [
                {
                    "id": 1,
                    "items": [
                        {"article_id": 1, "quantity": 6}
                    ]
                }],
            "delivery_fees": [
                {
                    "eligible_transaction_volume": {
                        "min_price": 0,
                        "max_price": 1000
                    },
                    "price": 800
                }]
        });
        expect(checkout.compute().carts[0].total).to.equal(1400);
    });

})
;