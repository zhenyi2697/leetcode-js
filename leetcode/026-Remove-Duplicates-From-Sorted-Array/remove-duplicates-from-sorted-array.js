// Source: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = nums => {
  if (nums.length === 0) {
    return 0;
  }

  let final = 0;
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev) {
      continue;
    } else {
      prev = nums[i];
      nums[++final] = nums[i];
    }
  }

  return final + 1;
};
