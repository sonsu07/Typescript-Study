// Public
class PublicUser {
    public name: string;
    constructor(){
        this.name = 'kim';
    }
}

let publicUser1 = new PublicUser();
publicUser1.name = 'park';  //가능


// Private
class PrivateUser {
    public name :string;
    private familyName :string;
    constructor(){
        this.name = 'Sungsu';
        this.familyName = 'Lee'; //가능
    }
}

let privateUser1 = new PrivateUser();
privateUser1.name = 'park';  //가능
// privateUser1.familyName = 456; //에러남


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


export {}