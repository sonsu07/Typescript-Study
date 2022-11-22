"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i;
    }
    return answer;
}
console.log(solution(13, 17));
