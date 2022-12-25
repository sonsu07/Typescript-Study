function countingSort(arr: number[]): number[] {
    // const result: number[] = new Array(100).fill(0);
    // for (let i = 0; i < arr.length; i++) {
    //     result[arr[i]]++;
    // }
    // return result;
    
    
    // 다른 풀이
    let frequencyArray = new Array(100).fill(0);
    for (let num of arr) {
        frequencyArray[num]++
    }
    return frequencyArray;
}

console.log(countingSort([1, 1, 3, 2, 1]));