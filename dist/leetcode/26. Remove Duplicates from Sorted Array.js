"use strict";
function removeDuplicates(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
    return nums.length;
}
const result = removeDuplicates([1, 1, 2]);
console.log(result);
