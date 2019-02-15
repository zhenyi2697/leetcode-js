// Source: https://leetcode.com/problems/remove-element/
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement = (nums, val) => {
  let final = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[final++] = nums[i];
    }
  }

  return final;
};
