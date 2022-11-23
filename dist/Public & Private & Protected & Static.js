"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySquare = void 0;
class PublicUser {
    constructor() {
        this.name = 'kim';
    }
}
let publicUser1 = new PublicUser();
publicUser1.name = 'park';
class PrivateUser {
    constructor() {
        this.name = 'Sungsu';
        this.familyName = 'Lee';
    }
}
let privateUser1 = new PrivateUser();
privateUser1.name = 'park';
console.log(privateUser1['name']);
privateUser1['name'] = 'kang';
console.log(privateUser1['name']);
class PrivateUserExchangeExample {
    constructor(name) {
        this.name = name;
    }
    changeName(change) {
        this.name = change;
    }
}
let privateUser = new PrivateUserExchangeExample('Sungsu');
console.log(privateUser);
privateUser.changeName('SunAh');
console.log(privateUser);
class MyUser {
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
const protectedUser = new ProtectUser();
console.log(protectedUser);
protectedUser.doExtends();
console.log(protectedUser['protectedVal']);
const protectedUser2 = new ProtectUser();
console.log(protectedUser2);
class StaticUser {
    constructor() {
        this.intro = StaticUser.skill + ' 전문가';
    }
}
StaticUser.skill = 'JS';
let staticUser1 = new StaticUser();
console.log(staticUser1.intro);
console.log(StaticUser);
StaticUser.skill = 'TS';
let staticUser2 = new StaticUser();
console.log(staticUser2.intro);
class User {
    constructor() {
        this.z = 30;
        this.z = 40;
    }
    modifyX() {
        User.x = 20;
    }
}
User.x = 10;
User.y = 20;
class ExtendsUser extends User {
    constructor() {
        super();
        this.some = this.z;
        this.z = 40;
    }
}
class Q3User {
    static addOne(a) {
        return Q3User.x + a;
    }
    static printX() {
        console.log(Q3User.x);
    }
}
Q3User.x = 10;
Q3User.y = 20;
Q3User.addOne(3);
Q3User.addOne(4);
Q3User.printX();
class Square {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        let random = Math.random();
        let square = `
                    <div style="position:relative; 
                          top: ${random * 400}px; 
                          left: ${random * 400}px; 
                          width: ${this.width}px; 
                          height: ${this.height}px; 
                          background: ${this.color}">
                    </div>
                    `;
        document.body.insertAdjacentHTML('beforeend', square);
    }
}
const mySquare = new Square(30, 30, 'red');
exports.mySquare = mySquare;
mySquare.draw();
