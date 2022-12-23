function aVeryBigSum(ar: number[]): number {
    // Write your code here
    return ar.reduce((acc, cur) => {
        return acc + cur;
    })
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));