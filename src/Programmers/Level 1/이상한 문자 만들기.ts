function solution(s: string) {
    const strArr: string[] = [];
    const wordArr: string[] = s.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
        for (let j = 0; j < wordArr[i].length; j++) {
            if (j % 2 === 0) strArr.push(wordArr[i][j].toUpperCase());
            else strArr.push(wordArr[i][j].toLowerCase());
        }
        if (i !== wordArr.length-1) strArr.push(' ');
    }
    return strArr.join('');
}

console.log(solution("try hello world"));

export {}