/**
 * narrowing
 */
import {type} from "os";

function notNarrowing(x: number | string) {
    let arr :number[] = [];
    // arr[0] = x; // TS2322: Type 'string | number' is not assignable to type 'number'. Type 'string' is not assignable to type 'number'.
}

function narrowing(x :number | string) {
    if (typeof x === 'number') {
        return x+1;
    } else {
        return x+1;
    }
}
let result = narrowing(12);
console.log(result); // 13
result = narrowing('12');
console.log(result); // 121

/**
 * assertion
 */
function assertion(x :number | string) {
    let name :string = 'Lee';
    // name as number // error
}

function assertionTest(x :number | string) {
    let array :number[] = [];
    array[0] = x as number;
}

assertionTest('123'); // 에러 캐치 못함

/**
 * Q1.  숫자여러개를 array 자료에 저장해놨는데
 * 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있는 상황. 이걸 클리닝해주는 함수가 필요함.
 * 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
 * [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지.
 */

function cleaning(arr :(string|number)[]) :number[]  {
    let cleaningFinish :number[] = [];
    arr.forEach(item => {
        if (typeof item === 'string') {
            cleaningFinish.push(Number(item));
        } else {
            cleaningFinish.push(item);
        }
    })
    return cleaningFinish
}

console.log( cleaning(['1', 2, '3']) );


/**
 * Q2.
 * let 철수쌤 = { subject : 'math' }
 * let 영희쌤 = { subject : ['science', 'english'] }
 * let 민수쌤 = { subject : ['science', 'art', 'korean'] }
 * 이런 형식으로 과목이 하나인 경우 문자열, 과목이 여러개면 배열로 입력되는 오브젝트가 존재.
 *
 * 파라미터가 입력되면 해당 value값인 배열의 맨 마지막 값을 리턴 ( 문자열이면 해당 문자열을 리턴 )하는 함수를 만들고 타입지정까지.
 */
type subjectObj = {
    subject :string | string[]
}
function returnLastClass(teacher :subjectObj) :string {
    if (typeof teacher.subject === 'string') {
        return teacher.subject;
    } else if (Array.isArray(teacher.subject)) {
        return teacher.subject[teacher.subject.length - 1];
    } else {
      return '해당 없음'
    }
}

console.log( returnLastClass({ subject : ['science', 'art', 'korean'] }) );