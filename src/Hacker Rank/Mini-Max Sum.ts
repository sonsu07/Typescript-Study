function miniMaxSum(arr: number[]): void {
    const copy = [...arr];
    const sort = copy.sort((a, b) => a > b ? 1 : -1)
    const result1 = sort.reduce((sum, cur, idx) => idx < 4 ? sum + cur : sum, 0)
    const result2 = sort.reduce((sum, cur, idx) => 0 < idx && idx < 5 ? sum + cur : sum, 0)
    console.log(result1, result2);
}

miniMaxSum([1, 3, 5, 7, 9]);