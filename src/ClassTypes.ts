class Person {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    addAge(num: number): number {
        let age = this.age
        age += num;
        return age;
    }
}

const person1 = new Person('Lee', 28);
console.log(person1.addAge(2));


/**
 * Q1. Car 클래스를 만들고 싶습니다.
 * 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
 * 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
 * 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
 */
class Car {
    model;
    price;

    constructor(model: string, price: number) {
        this.model = model
        this.price = price;
    }

    tax(): number {
        return (this.price / 10);
    }
}

const sonata = new Car('소나타', 3000);
const sonataTax = sonata.tax();
console.log(sonataTax);


/**
 * Q2. 파라미터를 포함하는 Word라는 이름의 클래스 생성
 * 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
 * 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
 * 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class
 * 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없음. 타입지정 필수
 */

interface WordArrType {
    num: number[];
    str: string[];
}

class Word {
    public num: number[] = [];
    public str: string[] = [];
    constructor(...params: (string | number)[]) {
        params.forEach(item => {
            if (typeof item === 'string') {
                this.str.push(item)
            } else {
                this.num.push(item);
            }
        })
    }
}

let obj = new Word('kim', 22, 'Lee', 28);
console.log(obj);