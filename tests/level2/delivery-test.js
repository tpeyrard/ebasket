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

    it('are charged for highest transaction volume', function () {
        var checkout = new Checkout({
            "articles": [
                { "id": 1, "name": "water", "price": 100 }
            ],
            "carts": [
                {
                    "id": 1,
                    "items": [
                        {"article_id": 1, "quantity": 30}
                    ]
                }],
            "delivery_fees": [
                {
                    "eligible_transaction_volume": {
                        "min_price": 0,
                        "max_price": 1000
                    },
                    "price": 800
                },
                {
                    "eligible_transaction_volume": {
                        "min_price": 2000,
                        "max_price": null
                    },
                    "price": 1
                }]
        });
        expect(checkout.compute().carts[0].total).to.equal(3001);
    });

    it('Acceptance test', function() {
        var checkout = new Checkout({
            "articles": [
                { "id": 1, "name": "water", "price": 100 },
                { "id": 2, "name": "honey", "price": 200 },
                { "id": 3, "name": "mango", "price": 400 },
                { "id": 4, "name": "tea", "price": 1000 }
            ],
            "carts": [
                {
                    "id": 1,
                    "items": [
                        { "article_id": 1, "quantity": 6 },
                        { "article_id": 2, "quantity": 2 },
                        { "article_id": 4, "quantity": 1 }
                    ]
                },
                {
                    "id": 2,
                    "items": [
                        { "article_id": 2, "quantity": 1 },
                        { "article_id": 3, "quantity": 3 }
                    ]
                },
                {
                    "id": 3,
                    "items": []
                }
            ],
            "delivery_fees": [
                {
                    "eligible_transaction_volume": {
                        "min_price": 0,
                        "max_price": 1000
                    },
                    "price": 800
                },
                {
                    "eligible_transaction_volume": {
                        "min_price": 1000,
                        "max_price": 2000
                    },
                    "price": 400
                },
                {
                    "eligible_transaction_volume": {
                        "min_price": 2000,
                        "max_price": null
                    },
                    "price": 0
                }
            ]
        });

        expect(JSON.stringify(checkout.compute())).to.equal(JSON.stringify({
            "carts": [
                {
                    "id": 1,
                    "total": 2000
                },
                {
                    "id": 2,
                    "total": 1800
                },
                {
                    "id": 3,
                    "total": 800
                }
            ]
        }))
    });

})
;