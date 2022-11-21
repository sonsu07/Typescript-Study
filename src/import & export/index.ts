type Car = {
    wheel : number,
    model : string
}
interface Bike {
    wheel : 2,
    model : string
}

export type myObjType = (a?: object) => void

export {Car, Bike}