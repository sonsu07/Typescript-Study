function solution(s: string, n: number): string {
    let newArr: string[] = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            if ((91 <= s.charCodeAt(i) + n && s.charCodeAt(i) + n <= 127) && (65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 90)
                || (s.charCodeAt(i) + n >= 123) && (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122)) {
                newArr[i] = String.fromCodePoint(s.charCodeAt(i) + n - 26);
            } else {
                newArr[i] = (String.fromCodePoint(s.charCodeAt(i) + n));
            }
        }
    }
    return newArr.join('');
}

console.log(solution("a B z", 4));

export {}