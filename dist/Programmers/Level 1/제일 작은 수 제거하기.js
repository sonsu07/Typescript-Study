function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if (arr.length === 0)
        arr.push(-1);
    return arr;
}
console.log(solution([4, 3, 2, 1]));
export {};
