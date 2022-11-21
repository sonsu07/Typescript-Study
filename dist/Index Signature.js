const someOne = {
    name: 'Kim',
    age: 21,
    born: 'Busan'
};
for (let prop in someOne) {
    console.log(`${prop} ${someOne[prop]}`);
}
class Person {
    constructor(name, age, born) {
        this.name = name;
        this.age = age;
        this.born = born;
    }
}
const lee = new Person('Lee', 28, 'Busan');
for (let prop in lee) {
    console.log(`${prop} ${lee[prop]}`);
}
export {};
