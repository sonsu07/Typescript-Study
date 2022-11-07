// Literal Type 만드는 법
let john :'bold';
// john = 'so'; // TS2322: Type '"so"' is not assignable to type '"bold"'.
let lee :'solo';
// lee = 'married' // TS2322: Type '"married"' is not assignable to type '"solo"'.

// Union Type으로도 가능
let literalUnion : 'type1' | 'type2';
literalUnion = "type1";
literalUnion = "type2";
// literalUnion = 'type3'; // TS2820: Type '"type3"' is not assignable to type '"type1" | "type2"'. Did you mean '"type1"'?

// function에서도 사용법 동일
function myFunc(x :'parameter') : -1 | 0 | 1{
    return 1 // -1, 0, 1 안에서만 가능
}

/**
 * Q1. 이런 함수는 어떻게 만들까요?
 * - '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
 * - '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.
 * - 예를 들면 ['가위', '보', '가위'] 이런거 return 가능
 * - ['가위', '바보'] 이런거 return하면 에러나야함
 */

// type RockScissorPaper = 'rock' | 'scissor' | 'paper';
//
// function rockScissorPaper(data: RockScissorPaper): [RockScissorPaper] {
//     return ['rock' | 'paper']
// }

// const
// 값을 변경할 수 없음
const somethingOne = 'hey';
// somethingOne = 1; // TS2588: Cannot assign to 'somethingOne' because it is a constant.

const referenceTypeArr = [1,2,3,4,5,'123'];
console.log(referenceTypeArr); // [ 1, 2, 3, 4, 5, '123' ]
referenceTypeArr[2] = 23;
console.log(referenceTypeArr); // [ 1, 2, 3, 4, 5, '123' ]

const referenceTypeObj = {
    name : 'lee',
    age : 28,
    born : 'Daegu'
}
console.log(referenceTypeObj); // { name: 'lee', age: 28, born: 'Daegu' }
referenceTypeObj.born = 'Busan';
console.log(referenceTypeObj); // { name: 'lee', age: 28, born: 'Daegu' }

// Literal Type의 문제점
const data = {
    name: 'Lee'
}

function myFunc2(a: 'Lee') {

}

// myFunc2(data.name);


// as const 효과
const asConstEffect = {
    name : 'Lee'
} as const;

function asConstFunc(x: 'Lee') {

}

asConstFunc(asConstEffect.name);
// asConstEffect.name = 'Kim';