"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const [name1, name2] = ['Lee', 'Kim'];
const { student, age } = { student: true, age: 20 };
const myObj = { student: true, age: 20 };
function destructuringFunc({ student, age }) {
    console.log(student, age);
}
destructuringFunc(myObj);
function maxNum(...params) {
    let result = 0;
    params.forEach((item, idx) => {
        if (item > params[idx - 1]) {
            result = item;
        }
    });
    return result;
}
console.log(maxNum(6, 3, 7, 2));
function printParams({ user, comment, admin }) {
    console.log(user, comment, admin);
}
printParams({ user: 'kim', comment: [3, 5, 4], admin: false });
function printArrParams([year, name, real]) {
    console.log(year, name, real);
}
printArrParams([40, 'wine', false]);
function restParams(...params) {
    console.log(params);
}
restParams(1, 2, 3, 4, 5);
