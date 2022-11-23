interface CarType {
    model: string,
    price: number,
    // tax: (price: number) => number
}


class Car implements CarType {
    model : string;
    price : number = 1000;
    constructor(a :string){
        this.model = a
    }
}
let myCar = new Car('morning');

export {}