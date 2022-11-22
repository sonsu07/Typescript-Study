function typeMiss(x: (unknown | number)[]) {
    return x[0];
}

let a = typeMiss([4, 2])
// console.log(a + 1) // TS2571: Object is of type 'unknown'.
if (typeof a === "number") {
    console.log(a + 1);
}

function generic<T>(x: T[]): T {
    return x[0];
}

let genericNum = generic<number>([4, 2]);
console.log(genericNum + 1);
let genericStr = generic<string>(['lee', 'kim']);
console.log(genericStr + ' 씨 안녕하세요');


// function constraints<T>(x: T) {
//     return x - 1; // TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// }

function constraints<T>(x: T) {
    if (typeof x === "number") return x + 1;
    return x;
}

let constraintsVal = constraints<number>(100)

function constrainsUseExtends<T extends number>(x: T) {
    return x - 1;
}

interface LengthCheck {
    length: number;
}

function customFunc<T extends LengthCheck>(x: T) {
    return x.length
}

let customLen1 = customFunc<string>('hello');
// let customLen2 = customFunc<number>('1234'); // TS2344: Type 'number' does not satisfy the constraint 'LengthCheck'.


/**
 * Q1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
 * Generic 이용
 */


function q1<T extends string | string[]>(x: T) {
    return x.length;
}

console.log(q1<string>('hello'));
console.log(q1<string[]>(['kim', 'lee']));

/**
 * Q2. Animal 이라는 타입이 있습니다.
 * 그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.
 * data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
 * 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
 * 오늘 배운 Generic을 이용해서 구현해보도록 합시다.
 */
interface Animal {
    name : string;
    age : number
}

let data = '{"name" : "dog", "age" : 1 }'
function parseJSONPlusType<T extends Animal>(x: string): T {
    return JSON.parse(x);
}

let result = parseJSONPlusType<Animal>(data);
console.log(result);

/**
 * Q3. class 수정
 *
 * class Person {
 *     name;
 *     constructor(a){
 *         this.name = a;
 *     }
 * }
 * let a = new Person('어쩌구');
 * a.name //any 타입이 되었넹
 *
 * 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
 * 이게 싫어서 파라미터에 string을 집어넣으면 string 타입
 * number를 집어넣으면 number 타입
 * string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?
 * 오늘 배운 Generic을 이용해봅시다.
 */
class Person<T> {
    name;
    constructor(a: T){
        this.name = a;
    }
}
let q3Result = new Person<string>('어쩌구');
console.log(typeof q3Result.name);

export {}