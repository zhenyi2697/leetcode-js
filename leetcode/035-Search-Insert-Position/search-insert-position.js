// Source: https://leetcode.com/problems/search-insert-position/
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = (nums, target) => {
  return binarySearch(nums, 0, nums.length - 1, target);
};

const binarySearch = (nums, lo, hi, target) => {
  if (lo > hi) {
    return lo;
  }

  const mid = Math.floor((lo + hi) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    return binarySearch(nums, lo, mid - 1, target);
  } else if (nums[mid] < target) {
    return binarySearch(nums, mid + 1, hi, target);
  }
};
