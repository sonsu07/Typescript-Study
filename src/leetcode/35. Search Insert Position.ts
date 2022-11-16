/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Ex 1.
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Ex 2.
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Ex 3.
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 * @param nums
 * @param target
 */

function searchInsert(nums: number[], target: number): number {
    let first = 0;
    let last = nums.length-1;
    while ( first <= last ) {
        let middle = Math.floor((first + last)/2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            last = middle-1;
        } else {
            first = middle+1;
        }
    }
    return first;
}

console.log(searchInsert([1,3,5,6],5));