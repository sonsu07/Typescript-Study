"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(s) {
    if (s.length % 2 === 0) {
        return s.split('').splice((s.length / 2) - 1, 2).join('');
    }
    else {
        return s[Math.floor(s.length / 2)];
    }
}
console.log(solution("abcde"));
