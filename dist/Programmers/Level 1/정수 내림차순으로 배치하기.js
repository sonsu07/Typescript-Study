function solution(n) {
    let answer = 0;
    let strArr = String(n).split('');
    strArr.sort(function (a, b) {
        if (a > b)
            return -1;
        else if (a < b)
            return 1;
        else
            return 0;
    });
    answer = Number(strArr.join(''));
    return answer;
}
console.log(solution(118372));
export {};
