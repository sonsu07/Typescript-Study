function lonelyInteger(arr: number[]): number {
    // Write your code here
    return arr.filter((num, index) => arr.indexOf(num) === arr.lastIndexOf(num))[0];
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]))

export {}