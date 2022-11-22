"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(x, n) {
    let answer = [];
    let origin = x;
    for (let i = 0; i < n; i++) {
        answer.push(x);
        x += origin;
    }
    return answer;
}
console.log(solution(2, 5));
