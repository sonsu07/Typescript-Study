function findCnt(sortArr: number[]) {
    return sortArr.length === 1 ?
        Math.floor(sortArr.length / 2) + 1 :
        Math.floor(sortArr.length / 2)
}

function findMedian(arr: number[]): number {
    let sort = arr.sort((a, b) => {
        return a > b ? 1 : -1;
    })
    console.log(findCnt(sort));
    return sort[findCnt(sort)];
}
console.log(findMedian([5, 3, 1, 2, 4]));