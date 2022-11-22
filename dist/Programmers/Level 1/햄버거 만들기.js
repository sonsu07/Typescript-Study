"use strict";
function solution(ingredient) {
    let answer = 0;
    let stack = [];
    ingredient.forEach(item => {
        stack.push(item);
        if (stack.length >= 4) {
            const find = stack.slice(-4).join('');
            if (find === '1231') {
                for (let i = 0; i < 4; i++)
                    stack.pop();
                answer++;
            }
        }
    });
    return answer;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
