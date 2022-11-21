function solution(n) {
    let answer = 0;
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            arr.push(i);
        }
    }
    answer = Math.min(...arr);
    return answer;
}
console.log(solution(10));
export {};
