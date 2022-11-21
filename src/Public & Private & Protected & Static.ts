// Public
import test from "node:test";

class PublicUser {
    public name: string;

    constructor() {
        this.name = 'kim';
    }
}

let publicUser1 = new PublicUser();
publicUser1.name = 'park';  //가능


// Private
class PrivateUser {
    public name: string;
    private familyName: string;

    constructor() {
        this.name = 'Sungsu';
        this.familyName = 'Lee'; //가능
    }
}

let privateUser1 = new PrivateUser();
privateUser1.name = 'park';  // private 변수는 수정 금지
// privateUser1.familyName = 456; //에러남
// console.log(privateUser1.familyName) // 점 표기법으로는 private 변수를 불러와 사용 못함
console.log(privateUser1['name']); // 괄호 표기법으로는 private 변수에 접근 가능.
privateUser1['name'] = 'kang'; // 수정하는 것도 가능하다.
console.log(privateUser1['name']);


/**
 * Q1. private 부여된 속성을 class 밖에서 수정해야할 경우?
 */
class PrivateUserExchangeExample {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    changeName(change: string) {
        this.name = change;
    }
}

let privateUser = new PrivateUserExchangeExample('Sungsu');
console.log(privateUser);
privateUser.changeName('SunAh');
console.log(privateUser);


// Protected
class MyUser {
    private privateVal;
    protected protectedVal;

    constructor() {
        this.privateVal = 'private 변수입니다';
        this.protectedVal = 'protected 변수입니다';
    }
}

class ProtectUser extends MyUser {
    doExtends() {
        this.protectedVal = 'extends를 통해 상속받은' + this.protectedVal;
        console.log(this.protectedVal);
    }

    constructor() {
        super();
        this.protectedVal = 'extends를 통해 상속받은 클래스에서 constructor를 사용한 ' + this.protectedVal;
    }
}

const myUser = new MyUser();
console.log(myUser);
// console.log(myUser.privateVal); // private 변수에 접근 불가
// console.log(myUser.protectedVal); // protected 변수에 접근 불가

const protectedUser = new ProtectUser()
console.log(protectedUser);
// console.log(protectedUser.privateVal); // private 변수에 접근 불가
// console.log(protectedUser.protectedVal); // protected 변수에 접근 불가

protectedUser.doExtends(); // protectedVal 변경
console.log(protectedUser['protectedVal']); // 괄호 표기법으로 확인
const protectedUser2 = new ProtectUser();
console.log(protectedUser2);

// Static
class StaticUser {
    static skill = 'JS';
    intro = StaticUser.skill + ' 전문가';
}

let staticUser1 = new StaticUser();
console.log(staticUser1.intro);
console.log(StaticUser);

StaticUser.skill = 'TS';
let staticUser2 = new StaticUser();
console.log(staticUser2.intro);


/**
 * Q2. 다음 x, y, z 속성의 특징을 설명해보십시오.
 */
class User {
    private static x = 10;
    public static y = 20;
    protected z = 30;

    modifyX() {
        User.x = 20;
    }

    constructor() {
        this.z = 40;
    }
}

// console.log(User);
// const testUser = new User();
// testUser.modifyX();
// console.log(User);

// User.y = 30;
// console.log(User);

class ExtendsUser extends User {
    some = this.z;

    constructor() {
        super();
        this.z = 40;
    }
}

/**
 * Q3. x 속성에 숫자를 더해주는 함수
 */

class Q3User {
    private static x = 10;
    public static y = 20;

    static addOne(a: number) {
        return Q3User.x + a;
    }

    static printX() {
        console.log(Q3User.x);
    }
}

Q3User.addOne(3) //이렇게 하면 x가 3 더해져야함
Q3User.addOne(4) //이렇게 하면 x가 4 더해져야함
Q3User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

/**
 * Q4 rectangle.draw()를 할 때마다
 * index2.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
 * 가로 400px 세로 400px 공간 안에 무작위로 배치
 */
class Square {
    public width: number;
    public height: number;
    public color: string;

    constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        const random = Math.random();
        let square = `<div style="position: relative">
                        top: ${random * 400}px;
                        left: ${random * 400}px;
                        width: ${this.width}px;
                        height: ${this.height}px;
                        background: ${this.color};
                    </div>`;
        document.body.insertAdjacentHTML('beforeend', square);
    }
}


export {}