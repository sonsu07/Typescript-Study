// function removeElement(nums: number[], val: number): number {
//     for (let i = 0; i < nums.length; i++) {
//         if (val === nums[i]) {
//             nums.splice(i, 1);
//             i = -1;
//         }
//     }
//     return nums.length;
// }

function removeElement(nums: number[], val: number): number { // map 쓰는게 속도 조금 더 빠름
    let resultMap = new Map();
    resultMap.set(val,1)
    for (let i = 0; i < nums.length; i++) {
        if (resultMap.has(nums[i])) {
            nums.splice(i,1);
            i = i -1;
        }
    }
    return nums.length;
}

const k = removeElement([0,1,2,2,3,0,4,2],2);
console.log(k)
