import {type} from "os";

function useTypeFunc(parameter: string): string {
    return parameter;
}

type TypeAlias = (x: number, y: number)  => number;
// let useTypeAliasInFunc: TypeAlias = function (x, y) {
//     return x+y;
// }

// let useTypeAliasInFunc: TypeAlias = (x,y) => {
//     return x+y;
// }

// type TypeAlias2 = function(x: number, y:number) {
//     return x + y;
// }


/**
 * Q1. userData라는 변수에 타입지정 알아서 해보십시오.
 * plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
 * changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
 * type 키워드를 쓰든 말든 알아서 합시다.
 *
 * let userData = {
 *   name : 'kim',
 *   age : 30,
 *   plusOne (x){
 *     return x + 1
 *   },
 *   changeName : () => {
 *     console.log('hello')
 *   }
 * }
 * userData.plusOne(1);
 * userData.changeName();
 */
// let userData = {
//     name : 'kim',
//     age : 30,
//     plusOne (x: number): number {
//         return x + 1
//     },
//     changeName : (): void => {
//         console.log('안녕')
//     }
// }
// userData.plusOne(1);
// userData.changeName();

// type Alias 사용하는 경우
type user = {
    name: string,
    age: number,
    plusOne: (x: number) => number,
    changeName: () => void
}

let userData: user = {
    name : 'kim',
    age : 30,
    plusOne (x){
        return x + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}
userData.plusOne(1);
userData.changeName();


/**
 * Q2. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
 * cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
 * removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
 * 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
 */

type TypeOfCutZero = (data: string) => string
const cutZero: TypeOfCutZero = (data) => {
    let dataArr: string[];
    if (data[0] === '0') {
        dataArr = data.split('');
        dataArr.splice(0, 1)
        return dataArr.join('');
    } else return data;
}
console.log(cutZero('0123'));

type TypeOfRemoveDash = (x: string) => number
const removeDash: TypeOfRemoveDash = data => Number(data.split('-').join(''));
console.log(removeDash('010-7777-9999')); // 숫자는 0으로 시작하면 그거 알아서 빼버린다.


/**
 * Q3. 함수에 함수를 집어넣고 싶습니다.
 * Q2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 상황
 * 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
 * 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
 * 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
 * 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
 * 이 함수는 어떻게 만들면 될까요?
 * 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
 */

type TypeOfContainsAll = (
    firstData: string,
    secondData: (x: string) => string,
    thirdData: (x: string) => number
) => number

const containsAll: TypeOfContainsAll = (firstData, secondData, thirdData) => {
    return thirdData(secondData(firstData))
}

console.log(containsAll('010-1111-2222', cutZero, removeDash));

type TypeOfFunc1 = (a :string) => string;
type TypeOfFunc2 = (a :string) => number;

function testFunc(a :string, func1 :TypeOfFunc1, func2 :TypeOfFunc2){
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2)
}
testFunc('010-1111-2222', cutZero, removeDash)  //1011112222