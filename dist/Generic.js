"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeMiss(x) {
    return x[0];
}
let a = typeMiss([4, 2]);
if (typeof a === "number") {
    console.log(a + 1);
}
function generic(x) {
    return x[0];
}
let genericNum = generic([4, 2]);
console.log(genericNum + 1);
let genericStr = generic(['lee', 'kim']);
console.log(genericStr + ' 씨 안녕하세요');
function constraints(x) {
    if (typeof x === "number")
        return x + 1;
    return x;
}
let constraintsVal = constraints(100);
function constrainsUseExtends(x) {
    return x - 1;
}
function customFunc(x) {
    return x.length;
}
let customLen1 = customFunc('hello');
function q1(x) {
    return x.length;
}
console.log(q1('hello'));
console.log(q1(['kim', 'lee']));
let data = '{"name" : "dog", "age" : 1 }';
function parseJSONPlusType(x) {
    return JSON.parse(x);
}
let result = parseJSONPlusType(data);
console.log(result);
class Person {
    constructor(a) {
        this.name = a;
    }
}
let q3Result = new Person('어쩌구');
console.log(typeof q3Result.name);
