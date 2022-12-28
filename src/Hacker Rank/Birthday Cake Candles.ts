function birthdayCakeCandles(candles: number[]): number {
    // Write your code here
    let copy = [...candles];
    let max = Math.max(...new Set(copy));
    return copy.filter(num => {
        return num >= max
    }).length;
}

console.log(birthdayCakeCandles([3, 1, 2, 3]));