function solution(a: number, b: number) {
    const date = new Date(2016, (a - 1), b);
    return date.toString().slice(0,3).toUpperCase();
}

console.log(solution(5, 24));

export {}
