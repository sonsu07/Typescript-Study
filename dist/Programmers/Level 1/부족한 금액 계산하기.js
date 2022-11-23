"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(price, money, count) {
    let num = 0;
    for (let i = 1; i <= count; i++) {
        num += i * price;
    }
    if (num > money)
        return num - money;
    else
        return 0;
}
console.log(solution(3, 20, 4));
