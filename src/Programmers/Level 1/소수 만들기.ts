import {FORMERR} from "dns";

function solution(nums: number[]): number {
    // 3개의 원소를 더한 배열 구하기
    let sumArr: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                sumArr.push(sum);
            }
        }
    }
    sumArr.sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    })

    // 소수 골라내기
    let primeNum: number[] = [];
    for (let i = 1; i <= Math.max(...sumArr); i++) {
        if (sumArr[i] % i === 0) {
            primeNum.push(sumArr[i]);
        }
    }
    console.log(primeNum);
    return primeNum.length;
}

console.log(solution([1, 2, 3, 4]));

export {}