interface objType {
    [index: string]: number;
}

function solution(survey: string[], choices: number[]): string {
    let answer = '';
    const types: objType = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    }

    for (let i = 0; i < choices.length; i++) {
        const [left, right] = survey[i].split('');
        const result = Math.abs(choices[i] - 4);
        if (choices[i] < 4) {
            types[left] += result;
        } else if (choices[i] > 4) {
            types[right] += result;
        }
    }

    const type: string[] = []
    for (let data in types) {
        type.push(data);
    }

    for (let i = 0; i < type.length; i += 2) {
        const left = types[type[i]];
        const right = types[type[i + 1]];
        if (left >= right) {
            answer += type[i];
        } else {
            answer += type[i + 1];
        }
    }
    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));

export {}