"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useTypeFunc(parameter) {
    return parameter;
}
let userData = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
userData.plusOne(1);
userData.changeName();
const cutZero = (data) => {
    let dataArr;
    if (data[0] === '0') {
        dataArr = data.split('');
        dataArr.splice(0, 1);
        return dataArr.join('');
    }
    else
        return data;
};
console.log(cutZero('0123'));
const removeDash = data => Number(data.split('-').join(''));
console.log(removeDash('010-7777-9999'));
const containsAll = (firstData, secondData, thirdData) => {
    return thirdData(secondData(firstData));
};
console.log(containsAll('010-1111-2222', cutZero, removeDash));
function testFunc(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}
testFunc('010-1111-2222', cutZero, removeDash);
