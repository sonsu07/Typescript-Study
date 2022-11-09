// rest parameter


// destructuring

const [name1, name2] = ['Lee', 'Kim'];


// type MyObjType = {
//     student: boolean,
//     age: number
// }
interface MyObjType {
    student: boolean,
    age: number
}

const {student, age} = {student: true, age: 20};
const myObj = {student: true, age: 20}

function destructuringFunc({student, age}: MyObjType) {
    console.log(student, age)
}

destructuringFunc(myObj)


/**
 * Q1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
 * 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
 * (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
 * (조건2) Math.max() 사용금지 반복문이나 쓰셈
 */
function maxNum(...params: number[]): number {
    let result: number = 0;
    params.forEach((item, idx) => {
        if (item > params[idx - 1]) {
            result = item
        }
    })
    return result
}

console.log(maxNum(6, 3, 7, 2));

/**
 * Q2. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
 * 함수( { user : 'kim', comment : [3,5,4], admin : false } )
 * 어떻게 코드를 짜야할까요?
 * (조건1) 파라미터 destructuring 문법을 써봅시다.
 * (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
 */
interface printParamsInterface {
    user: string,
    comment: number[],
    admin: boolean
}

function printParams({user, comment, admin}: printParamsInterface) {
    console.log(user, comment, admin)
}

printParams({user: 'kim', comment: [3, 5, 4], admin: false})

/**
 * Q3. 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
 * 함수( [40, 'wine', false] )
 * (조건1) 파라미터 destructuring 문법 사용
 * (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
 */
type ArrParamsType = (string | number | boolean)[];

function printArrParams([year, name, real]: ArrParamsType) {
    console.log(year, name, real)
}
printArrParams( [40, 'wine', false] )


function restParams(...params: (string | number | boolean)[]) {
    console.log(params)
}

restParams(1,2,3,4,5)

export {}