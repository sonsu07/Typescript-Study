"use strict";
let user = 'someone';
console.log(user, typeof user);
user = 123;
console.log(user, typeof user);
let usersArr = ['PersonA', 'PersonB', 'PersonC', 123];
let usersObj = { name: 'PersonA', age: 28, description: 123 };
let anything;
anything = 123;
console.log(anything, typeof anything);
anything = 'hihihi';
console.log(anything, typeof anything);
anything = [];
console.log(anything, typeof anything);
let anything1;
console.log('anythingType:', typeof anything1);
anything1 = 'hihihi';
console.log(anything1, typeof anything1);
anything1 = [];
let myUnknown;
myUnknown = 123;
console.log(myUnknown, typeof myUnknown);
myUnknown = 'mimimi';
console.log(myUnknown, typeof myUnknown);
myUnknown = [];
console.log(myUnknown, typeof myUnknown);
let anythingTest;
let someVar1 = anythingTest;
let someVar2 = anythingTest;
let someVar3 = anythingTest;
let unknownTest;
let someoneName;
let userName = 'kim';
let userAge = undefined;
let married = false;
let Lee = [userName, userAge, married];
let school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
