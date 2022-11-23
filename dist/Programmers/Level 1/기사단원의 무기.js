"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(number, limit, power) {
    let answer = 0;
    let aliquotArr = [];
    function countDivisors(n) {
        let cnt = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                if (n / i == i)
                    cnt++;
                else
                    cnt = cnt + 2;
            }
        }
        return cnt;
    }
    for (let i = 1; i <= number; i++) {
        aliquotArr.push(countDivisors(i));
    }
    for (let i = 0; i < aliquotArr.length; i++) {
        if (aliquotArr[i] > limit) {
            aliquotArr[i] = power;
        }
        answer += aliquotArr[i];
    }
    return answer;
}
console.log(solution(5, 3, 2));
