// Source: https://leetcode.com/problems/container-with-most-water/
// Difficulty: Medium

/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = heights => {
  let result = 0;
  let start = 0;
  let end = heights.length - 1;

  while (start < end) {
    result = Math.max(
      result,
      Math.min(heights[start], heights[end]) * (end - start)
    );
    if (heights[start] < heights[end]) {
      start++;
    } else {
      end--;
    }
  }

  return result;
};

module.exports = maxArea;
