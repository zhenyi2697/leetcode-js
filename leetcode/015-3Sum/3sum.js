// Source: https://leetcode.com/problems/3sum/
// Difficulty: Medium
// Inspired by: https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  const results = [];
  if (nums.length < 3) return results;

  // Sort element in ascending order in O(nlgn)
  nums.sort((a, b) => a - b);

  const target = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    // if cur element is larger than target, then no need to go furthur
    if (nums[i] > target) break;

    // Skip equal elements for i to avoid duplicate result
    // Make sure the make the index correct
    // We also skip this test for the very first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1; // middle element
    let k = nums.length - 1; // right element
    while (j < k) {
      const result = nums[i] + nums[j] + nums[k];
      if (result === target) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j + 1] === nums[j]) j++;
        while (nums[k - 1] === nums[k]) k--;

        j++;
        k--;
      } else if (result > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return results;
};

module.exports = threeSum;
