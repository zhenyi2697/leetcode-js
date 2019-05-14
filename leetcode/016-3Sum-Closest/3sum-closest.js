// Source: https://leetcode.com/problems/3sum-closest/
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let result = null;
  if (nums.length < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // if ith element is already bigger than min diff
    // then the sum of i + j + k must be bigger, so we can stop
    if (
      result !== null && // except first one
      nums[i] > target &&
      Math.abs(nums[i] - target) > Math.abs(result - target)
    )
      break;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) return target;
      else if (sum < target) j++;
      else k--;

      // Update result if smaller than current result
      if (result === null || Math.abs(sum - target) < Math.abs(result - target))
        result = sum;
    }
  }

  return result;
};

module.exports = threeSumClosest;
