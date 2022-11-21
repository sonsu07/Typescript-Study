"use strict";
function myGenericFunc(x) {
    return x[0];
}
let a = myGenericFunc([4, 2]);
console.log(a);
let b = myGenericFunc(['4', '2']);
console.log(b);
function myGenericFunc2(x) {
    return x.length;
}
myGenericFunc2('2');
