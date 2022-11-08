"use strict";
let john;
let lee;
let literalUnion;
literalUnion = "type1";
literalUnion = "type2";
function myFunc(x) {
    return 1;
}
const somethingOne = 'hey';
const referenceTypeArr = [1, 2, 3, 4, 5, '123'];
console.log(referenceTypeArr);
referenceTypeArr[2] = 23;
console.log(referenceTypeArr);
const referenceTypeObj = {
    name: 'lee',
    age: 28,
    born: 'Daegu'
};
console.log(referenceTypeObj);
referenceTypeObj.born = 'Busan';
console.log(referenceTypeObj);
const data = {
    name: 'Lee'
};
function myFunc2(a) {
}
const asConstEffect = {
    name: 'Lee'
};
function asConstFunc(x) {
}
asConstFunc(asConstEffect.name);
