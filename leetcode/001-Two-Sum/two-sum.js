// Source: https://leetcode.com/problems/two-sum/
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remainingIndex = cache.get(target - nums[i]);
    if (remainingIndex !== undefined) {
      return [remainingIndex, i];
    }
    cache.set(nums[i], i);
  }

  return [];
};

module.exports = twoSum;
