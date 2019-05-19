/**
 * Reverse element at i and j
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 */
const swap = (nums, i, j) => {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

/**
 * reverse nums from start index
 * @param {number[]} nums
 * @param {number} start
 */
const reverse = (nums, start) => {
  let i = start;
  let j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
};

// Source: https://leetcode.com/problems/next-permutation/
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = nums => {
  let i = nums.length - 1;
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }

  // If it's possible to find next permutation
  if (i > 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i - 1]) {
      j--;
    }
    swap(nums, i - 1, j);
  }

  // Reverse all the values from i
  // This will also revert all strings if it's in descending order
  reverse(nums, i);
};

module.exports = nextPermutation;
