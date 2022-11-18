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

export {}