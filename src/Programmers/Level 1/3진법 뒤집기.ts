function solution(n: number): number {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

console.log(solution(125));

export {}