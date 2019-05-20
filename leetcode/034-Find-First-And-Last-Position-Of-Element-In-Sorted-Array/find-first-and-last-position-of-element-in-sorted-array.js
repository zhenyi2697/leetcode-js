// Source: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Difficulty: Medium

/**
 * Search index for target 5 in array like [1,2,3,4,5,5]
 * At least, the end element is equal to target
 *
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @param {number} target
 */
const searchEnd = (nums, start, end, target) => {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

/**
 * Search end index target 1 in array like [1,1,2,3,4]
 * At least the first element is equal to target
 *
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @param {number} target
 */
const searchStart = (nums, start, end, target) => {
  while (start < end) {
    // This one should use ceil instead of floor
    // To avoid infinite loop when there are 2 elements
    const mid = Math.ceil((start + end) / 2);
    if (nums[mid] === target) {
      start = mid;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return [
        searchEnd(nums, start, mid, target),
        searchStart(nums, mid, end, target)
      ];
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return [-1, -1];
};

module.exports = searchRange;
