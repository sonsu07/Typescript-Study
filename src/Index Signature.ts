

interface PracticeIndexSign {
    [index: string]: string;
    val1: string;
    // val2: number;
}

interface SomeOneInterface {
    [index: string] : string | number
    name: string;
    age: number;
    born: string;
}
const someOne: SomeOneInterface = {
    name: 'Kim',
    age: 21,
    born: 'Busan'
}
for (let prop in someOne) {
    console.log(`${prop} ${someOne[prop]}`);
}

class Person {
    [index: string] : string | number
    name: string;
    age: number;
    born: string;
    constructor(name: string, age: number, born: string) {
        this.name = name;
        this.age = age;
        this.born = born;
    }
}

const lee = new Person('Lee', 28, 'Busan');
for (let prop in lee) {
    console.log(`${prop} ${lee[prop]}`);
}

export{}