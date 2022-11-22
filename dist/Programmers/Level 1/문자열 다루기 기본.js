"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return s.split('').every(n => !isNaN(Number(n)));
    }
    else {
        return false;
    }
}
console.log(solution("1234"));
