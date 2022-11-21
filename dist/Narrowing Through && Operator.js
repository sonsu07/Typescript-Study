function defaultNarrowing(x) {
    if (typeof x === 'string') {
        console.log(typeof x, x);
    }
    else {
        console.log(typeof x, x);
    }
}
defaultNarrowing('스트링입니다');
defaultNarrowing(123);
function andOperatorNarrowing(a) {
    if (a && typeof a === 'string') {
        console.log(a);
    }
}
andOperatorNarrowing('안녕하세요');
export {};
