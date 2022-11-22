"use strict";
let dog;
dog = ['myDog', true];
function restParams(...x) {
    console.log(x);
}
restParams('1번', '2번');
const recentFood = ['치킨', 19000, true];
const arr = ['동서녹차', 4000, true, false, true, true, false, true];
function q3(...rest) {
}
q3('a', true, 6, 3, '1', 4);
function q4(...rest) {
    let resultArr = [[], []];
    rest.forEach(item => {
        if (typeof item === "string")
            resultArr[0].push(item);
        else
            resultArr[1].push(item);
    });
    return resultArr;
}
console.log(q4(1, 2, 'fff', '4', 22));
