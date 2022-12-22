function plusMinus(arr: number[]): void {
    // Write your code here

    let positiveCnt = 0;
    let negativeCnt = 0;
    let zeroCnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positiveCnt++;
        else if (arr[i] < 0) negativeCnt++;
        else if (arr[i] === 0) zeroCnt++;
    }

    let positive = (positiveCnt / arr.length).toFixed(6);
    let negative = (negativeCnt / arr.length).toFixed(6);
    let zero = (zeroCnt / arr.length).toFixed(6);

    console.log(positive);
    console.log(negative);
    console.log(zero);
}

plusMinus([-4, 3, -9, 0, 4, 1]);