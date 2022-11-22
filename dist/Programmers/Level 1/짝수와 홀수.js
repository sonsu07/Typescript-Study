"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(num) {
    let answer = '';
    if (num % 2 === 0)
        answer = 'Even';
    else
        answer = 'Odd';
    return answer;
}
console.log(solution(4));
