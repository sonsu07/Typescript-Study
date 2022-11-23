/**
 * 문제 설명
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 *
 * 제한 사항
 * 두 수는 1이상 1000000이하의 자연수입니다.
 * 입출력 예
 * n    m    return
 * 3    12    [3, 12]
 * 2    5    [1, 10]
 * 입출력 예 설명
 * 입출력 예 #1
 * 위의 설명과 같습니다.
 *
 * 입출력 예 #2
 * 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
 */

function solution(n: number, m: number): number[] {
    let answer: number[] = [];
    let big = 0;
    let small = 0;
    if (n - m < 0) {
        big = m;
        small = n;
    } else {
        big = n;
        small = m;
    }

    function createDivisorsArr(x: number) {
        let divisorsArr: number[] = [];
        for (let i = 1; i <= x; i++) {
            if (x % i === 0) {
                divisorsArr.push(i);
            }
        }
        return divisorsArr;
    }

    let bigArr: number[] = createDivisorsArr(big);
    let smallArr: number[] = createDivisorsArr(small);

    // find G.C.D
    function findGCD(bigArr: number[], smallArr: number[]) {
        let gcdArr: number[] = [];
        bigArr.forEach((num, idx) => {
            if (smallArr.includes(num) ) {
                gcdArr.push(num);
            }
        })
        return Math.max(...gcdArr);
    }
    let gcd = findGCD(bigArr, smallArr);

    // find L.C.M
    function findLCM(n: number,m: number,gcd: number) {
        let lcm = 1;
        let numArr: number[] = [n, m];
        let lcmArr = numArr.map(x => x / gcd);
        lcmArr.push(gcd);
        lcmArr.forEach(num => {
            lcm *= num;
        })
        return lcm;
    }
    let lcm = findLCM(n, m, gcd);

    // result
    answer = [gcd, lcm];
    return answer;
}

console.log(solution(3,12));

export {}