function simpleArraySum(ar: number[]): number {
    return ar.reduce((acc: number, cur: number) => acc + cur, 0);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))