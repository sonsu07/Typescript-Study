function solution(s) {
    let answer = true;
    s = s.toLowerCase();
    let pCnt = 0;
    let yCnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'y')
            yCnt++;
        else if (s[i] === 'p')
            pCnt++;
    }
    answer = pCnt === yCnt;
    return answer;
}
console.log(solution("Pyy"));
export {};
