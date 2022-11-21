"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    addAge(num) {
        let age = this.age;
        age += num;
        return age;
    }
}
const person1 = new Person('Lee', 28);
console.log(person1.addAge(2));
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return (this.price / 10);
    }
}
const sonata = new Car('소나타', 3000);
const sonataTax = sonata.tax();
console.log(sonataTax);
class Word {
    constructor(...params) {
        this.num = [];
        this.str = [];
        params.forEach(item => {
            if (typeof item === 'string') {
                this.str.push(item);
            }
            else {
                this.num.push(item);
            }
        });
    }
}
let obj = new Word('kim', 22, 'Lee', 28);
console.log(obj);
