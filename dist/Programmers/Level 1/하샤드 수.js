function solution(x) {
    let answer = true;
    let str = String(x);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    answer = x % sum === 0;
    return answer;
}
console.log(solution(10));
export {};
