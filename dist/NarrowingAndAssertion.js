"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notNarrowing(x) {
    let arr = [];
}
function narrowing(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else {
        return x + 1;
    }
}
let result = narrowing(12);
console.log(result);
result = narrowing('12');
console.log(result);
function assertion(x) {
    let name = 'Lee';
}
function assertionTest(x) {
    let array = [];
    array[0] = x;
}
assertionTest('123');
function cleaning(arr) {
    let cleaningFinish = [];
    arr.forEach(item => {
        if (typeof item === 'string') {
            cleaningFinish.push(Number(item));
        }
        else {
            cleaningFinish.push(item);
        }
    });
    return cleaningFinish;
}
console.log(cleaning(['1', 2, '3']));
function returnLastClass(teacher) {
    if (typeof teacher.subject === 'string') {
        return teacher.subject;
    }
    else if (Array.isArray(teacher.subject)) {
        return teacher.subject[teacher.subject.length - 1];
    }
    else {
        return '해당 없음';
    }
}
console.log(returnLastClass({ subject: ['science', 'art', 'korean'] }));
