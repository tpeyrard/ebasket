var chai = require('chai');
var expect = chai.expect;
var Checkout = require('./../../src/checkout');

describe('Discounts', function () {

    it('of type amount are supported', function () {
        var checkout = new Checkout({
            "articles": [
                {"id": 1, "name": "water", "price": 100},
                {"id": 2, "name": "honey", "price": 200}
            ],
            "carts": [
                {
                    "id": 1,
                    "items": [
                        {"article_id": 1, "quantity": 6},
                        {"article_id": 2, "quantity": 2}
                    ]
                }
            ],
            "delivery_fees": [
                {
                    "eligible_transaction_volume": {
                        "min_price": 0,
                        "max_price": 1000
                    },
                    "price": 800
                }
            ],
            "discounts": [
                {"article_id": 2, "type": "amount", "value": 25}
            ]
        });
        expect(checkout.compute().carts[0].total).to.equal(600 + 2 * (200 - 25) + 800);
    });

    it('of type percentage are supported', function () {
        var checkout = new Checkout({
            "articles": [
                {"id": 1, "name": "water", "price": 100},
                {"id": 5, "name": "ketchup", "price": 999}
            ],
            "carts": [
                {
                    "id": 1,
                    "items": [
                        {"article_id": 1, "quantity": 6},
                        {"article_id": 5, "quantity": 2}
                    ]
                }
            ],
            "delivery_fees": [
                {
                    "eligible_transaction_volume": {
                        "min_price": 0,
                        "max_price": 2000
                    },
                    "price": 100
                }
            ],
            "discounts": [
                {"article_id": 5, "type": "percentage", "value": 30}
            ]
        });
        expect(checkout.compute().carts[0].total).to.equal(600 + 2 * (999*(30/100)) + 100);
    });
})
;