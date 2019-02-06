// Source: https://leetcode.com/problems/reverse-integer/
// Difficulty: Easy

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const sign = x < 0 ? -1 : 1;
  const reversed = x
    .toString()
    .split('')
    .reverse()
    .join('');

  // parseInt will remove leading 0s and trailing minus sign
  const result = sign * parseInt(reversed, 10);

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0;
  }

  return result;
};

module.exports = reverse;
