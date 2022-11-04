// How to type a function
import {log} from "util";

function somethingFunc(x: number) : number {
    return x * 2;
}

// void type
let a = 2;
function practiceVoid(x: number) :void {
    x += 1;
    console.log(x);
}
practiceVoid(a);

// Returns an error if the function has parameters but is not used.
function notUseParameter(x?: number) {

}
notUseParameter()


/**
 * Q1. 에러가 발생하는 이유는?
 */
// function question1(x: number | string) : void {
//     console.log(x+3);
// }
// question1(2);

// => 연산 타입이 동일하지 않아서

/**
 * Q2. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
 * 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수 생성
 */
function question2(name?: string): void {
    if (name) console.log(`안녕하세요 ${name}`);
    else console.log('이름이 없습니다.');
}
console.log('Question 2.');
question2('대생');
question2();

/**
 * Q3. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
 */
function question3(x: number | string) {
    return String(x).length;
}
console.log('Question 3.');
console.log(question3(333)); // 3
console.log(question3('안녕하세요')); // 5

/**
 * 결혼 가능 확률을 알려주는 함수 생성
 *
 * 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
 * 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
 * 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
 */
function question4(income: number, ownHome: boolean, charmingScore: string): string {
    let point: number = 0;
    point += (income / 10000);
    if (ownHome) point += 500;
    switch (charmingScore) {
        case '상':
            point += 100;
            break;
        default :
            point += 0;
            break;
    }

    console.log('resultPoint: ' + point);
    if (point >= 600) return '결혼 가능';
    else return '';
}

console.log('Question 4.');
let result = question4(700, false, '중');
console.log(result);
