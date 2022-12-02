function solution(array: number[], commands: (number[])[]): number[] {
    let answer: number[] = [];
    let sliceArr: number[] = [];
    for (let i = 0; i < commands.length; i++) {
        sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);
        sliceArr.sort((a, b) => {
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        })
        answer.push(sliceArr[commands[i][2] - 1]);
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

export {}