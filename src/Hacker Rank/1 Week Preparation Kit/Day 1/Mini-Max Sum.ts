function miniMaxSum(arr: number[]): void {
    // Write your code here
    const sort = arr.sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    })

    let minArr: number[] = sort.slice(0, 4);
    let maxArr: number[] = sort.reverse().slice(0, 4);

    let max = 0;
    let min = 0;
    minArr.forEach(num => {min += num;});
    maxArr.forEach(num => {max += num;})

    console.log(min, max);
}

miniMaxSum([1, 3, 5, 9, 7])