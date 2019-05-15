// Source: https://leetcode.com/problems/4sum/
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const results = [];
  if (nums.length < 4) return results;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let low = j + 1;
      let high = nums.length - 1;
      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum === target) {
          results.push([nums[i], nums[j], nums[low], nums[high]]);

          while (nums[low + 1] === nums[low]) low++;
          while (nums[high - 1] === nums[high]) high--;

          low++;
          high--;
        } else if (sum < target) {
          low++;
        } else {
          high--;
        }
      }
    }
  }
  return results;
};

module.exports = fourSum;
