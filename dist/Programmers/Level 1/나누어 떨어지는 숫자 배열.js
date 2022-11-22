"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(arr, divisor) {
    let answer = [];
    arr.forEach((num, idx) => {
        if (num % divisor === 0) {
            answer.push(num);
        }
    });
    if (answer.length === 0)
        answer.push(-1);
    else {
        answer.sort(function (a, b) {
            if (a > b)
                return 1;
            else if (a === b)
                return 0;
            else
                return -1;
        });
    }
    return answer;
}
console.log(solution([2, 36, 1, 3], 1));
