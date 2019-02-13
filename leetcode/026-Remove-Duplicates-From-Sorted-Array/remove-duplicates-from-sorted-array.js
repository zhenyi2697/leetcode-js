// Source: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = nums => {
  const swap = (nums, i, j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };

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
      swap(nums, i, ++final);
    }
  }

  return final + 1;
};
