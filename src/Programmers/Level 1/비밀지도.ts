function solution(n: number, arr1: number[], arr2: number[]): string[] {
    const arr1Binary: string[] = [];
    const arr2Binary: string[] = [];
    const resultBinaryArr: string[] = [];

    for (let i = 0; i < arr1.length; i++) {
        let arr1BinaryNum = arr1[i].toString(2);
        if (arr1BinaryNum.length !== n) {
            let insufficient = new Array(n - arr1BinaryNum.length).fill(0);
            arr1BinaryNum = insufficient.concat(arr1BinaryNum).join('');
        }

        let arr2BinaryNum = arr2[i].toString(2);
        if (arr2BinaryNum.length !== n) {
            let insufficient = new Array(n - arr2BinaryNum.length).fill(0);
            arr2BinaryNum = insufficient.concat(arr2BinaryNum).join('');
        }

        arr1Binary.push(arr1BinaryNum);
        arr2Binary.push(arr2BinaryNum);
    }

    for (let i = 0; i < arr1Binary.length; i++) {
        let temp: string[] = [];
        for (let j = 0; j < arr1Binary[i].length; j++) {
            if (arr1Binary[i][j] === '1' || arr2Binary[i][j] === '1') {
                temp.push('#');
            } else {
                temp.push(' ');
            }
        }
        resultBinaryArr.push(temp.join(''));
    }
    return resultBinaryArr;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

export {}