function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (!signs[i]) {
            absolutes[i] *= -1;
        }
        answer += absolutes[i];
    }
    return answer;
}
console.log(solution([1, 2, 3], [false, false, true]));
export {};
