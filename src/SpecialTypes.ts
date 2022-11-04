// Union Type
let user :(number | string) = 'someone';
console.log(user, typeof user);
user = 123;
console.log(user, typeof user);

let usersArr :(string | number)[]
    = ['PersonA', 'PersonB', 'PersonC', 123];

let usersObj :{name: string, age: number, description: number|string}
    = {name: 'PersonA', age: 28, description: 123};

// Any Type
let anything: any;
anything = 123;
console.log(anything, typeof anything);
anything = 'hihihi';
console.log(anything, typeof anything);
anything = [];
console.log(anything, typeof anything); // noImplicitAny, 암시적 any 타입 부여를 거절.

// do not specify any type
let anything1;
console.log('anythingType:', typeof anything1);
anything1 = 'hihihi';
console.log(anything1, typeof anything1);
anything1 = [];
// console.log(anything1, typeof anything1);

// Unknown Type
let myUnknown: unknown;
myUnknown = 123;
console.log(myUnknown, typeof myUnknown);
myUnknown = 'mimimi';
console.log(myUnknown, typeof myUnknown);
myUnknown = [];
console.log(myUnknown, typeof myUnknown);

// Any vs Unknown
let anythingTest: any;
let someVar1: string = anythingTest;
let someVar2: boolean = anythingTest;
let someVar3: number = anythingTest;

let unknownTest: unknown;
// let someVar4: string = unknownTest;
// let someVar5: boolean = unknownTest;
// let someVar6: number = unknownTest;

let someoneName: unknown;
// someoneName[0];
// someoneName-1;
// someoneName.data;




// homework 1
let userName: string = 'kim';
let userAge: undefined|number = undefined;
let married: boolean = false;
let Lee: (string | undefined | number | boolean)[] = [userName, userAge, married];

// homework 2
type schoolProperty = {
    score: (number|boolean)[],
    teacher: string,
    friend: string | string[]
}
let school: schoolProperty = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
school.score[4] = false;
school.friend = ['Lee' , school.teacher]