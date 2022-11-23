"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, '*');
}
console.log(solution("01033334444"));
