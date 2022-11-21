function solution(x, n) {
    let answer = [];
    let origin = x;
    for (let i = 0; i < n; i++) {
        answer.push(x);
        x += origin;
    }
    return answer;
}
console.log(solution(2, 5));
export {};
