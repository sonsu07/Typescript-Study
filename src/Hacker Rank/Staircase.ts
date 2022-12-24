function staircase(n: number): void {
    // Write your code here
    let arr = new Array(n + 1).fill(' ');
    arr.reduceRight((hashTag, cur, idx) => {
        arr[idx] = '#'
        console.log(arr.join(''));
    })
}

staircase(6);

