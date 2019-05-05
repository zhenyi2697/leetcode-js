// Source: https://leetcode.com/problems/string-to-integer-atoi/
// Difficulty: Medium

/**
 * Check if char at index is numeric
 * @param {string} str
 * @param {number} index
 */
const isNumeric = (str, index) => {
  const cc = str.charCodeAt(index);
  return cc >= 48 && cc <= 57;
};

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  str = str.trim();

  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(-2, 31);
  let result = 0;
  let i = 0;

  if (str[0] === '-' || str[0] === '+') {
    i = 1;
  }

  while (i < str.length && isNumeric(str, i)) {
    result = result * 10 + parseInt(str[i], 10);
    i++;
  }

  result = result * (str[0] === '-' ? -1 : 1);
  if (result > INT_MAX) {
    return INT_MAX;
  } else if (result < INT_MIN) {
    return INT_MIN;
  } else {
    return result;
  }
};

module.exports = myAtoi;
