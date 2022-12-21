// Do not use built-in exponent function or operator

function mySqrt(x: number): number {
    if (x < 2) return x;
    let left = 1;
    let right = x;

    while (left < right) {
        const mid = Math.floor((left+right) / 2);

        if (mid * mid === x) return mid;
        else if (mid * mid > x) right = mid;
        else left = mid + 1;
    }
    return left - 1;
}

console.log(mySqrt(7));


// const mySqrt = (x) => {
//     let r = x
//     while (r * r > x) {
//         r = Math.floor((r + x / r) / 2)
//     }
//
//     return r
// }