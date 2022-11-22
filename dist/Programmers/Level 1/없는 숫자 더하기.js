"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
