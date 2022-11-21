function solution(n) {
    let answer = [];
    const str = String(n).split("").reverse();
    for (let i = 0; i < str.length; i++) {
        answer.push(Number(str[i]));
    }
    return answer;
}
console.log(solution(12345));
export {};
