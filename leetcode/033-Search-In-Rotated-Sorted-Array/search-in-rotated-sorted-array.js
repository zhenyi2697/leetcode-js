// Source: https://leetcode.com/problems/search-in-rotated-sorted-array/
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;

    // Left is sorted
    if (nums[start] <= nums[mid]) {
      if (nums[mid] > target && nums[start] <= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // Right is sorted
      if (nums[mid] < target && nums[end] >= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

module.exports = search;
