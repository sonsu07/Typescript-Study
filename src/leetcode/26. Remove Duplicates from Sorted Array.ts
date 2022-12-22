/**
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

function removeDuplicates(nums: number[]): number {
    nums.splice(0, nums.length, ...(new Set(nums))); // 배열 내용 싹다 잘라내고 중복 제거한 배열로 치환
    return nums.length; // 중복 제거한 배열 길이 리턴
}

const result = removeDuplicates([1,1,2]);
console.log(result);

export {}