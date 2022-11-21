"use strict";
const ModernJavascriptDeepDiveInterface = {
    title: 'Modern Javascript DeepDive',
    price: 45000,
    isbn: '979-11-5839-223-9',
    company: '위키북스'
};
const ModernJavascriptDeepDiveType = {
    title: 'Modern Javascript DeepDive',
    price: 45000,
    isbn: '979-11-5839-223-9',
    company: '위키북스'
};
const product = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone']
};
const cart = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 }
];
const updateCart = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
    { product: '청소기', price: 7000, card: false }
];
const myObj = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
};
