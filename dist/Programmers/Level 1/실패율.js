"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(N, stages) {
    let arr = [];
    let totalNum = stages.length;
    for (let i = 1; i <= N; i++) {
        let stageNum = stages.filter(n => n == i).length;
        let failureRate = 0;
        if (stageNum === 0) {
            failureRate = 0;
        }
        else {
            failureRate = stageNum / totalNum;
        }
        totalNum -= stageNum;
        arr.push({
            idx: i,
            ratio: failureRate
        });
    }
    arr.sort((a, b) => {
        if (a.ratio > b.ratio) {
            return -1;
        }
        else if (a.ratio < b.ratio) {
            return 1;
        }
        else {
            if (a.idx > b.idx) {
                return 1;
            }
            else {
                return -1;
            }
        }
    });
    return arr.map(n => n.idx);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
