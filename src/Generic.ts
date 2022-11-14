function myGenericFunc<MyType1>(x: MyType1[]): MyType1 {
    return x[0];
}
let a = myGenericFunc<number>([4,2])
console.log(a);
let b = myGenericFunc<string>(['4', '2']);
console.log(b);

interface LengthCheck {
    length: number;
}

function myGenericFunc2<MyType2 extends LengthCheck>(x: MyType2) {
    return x.length ;
}

myGenericFunc2<string>('2');