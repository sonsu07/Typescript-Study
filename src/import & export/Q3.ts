// type Dog = string;
// interface Dog { name : string };

namespace MyDog {
    export type Dog = string
}

namespace YourDog {
    export interface Dog {name: string}
}

let dog1: MyDog.Dog = 'bark';
let dog2: YourDog.Dog = { name : 'paw' }

