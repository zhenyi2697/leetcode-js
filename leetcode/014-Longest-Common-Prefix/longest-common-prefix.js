// Source: https://leetcode.com/problems/longest-common-prefix/
// Difficulty: Easy

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (strs.length === 0) return '';

  let minLength = strs[0].length;
  for (const str of strs) {
    if (str.length < minLength) {
      minLength = str.length;
    }
  }

  for (let i = 0; i < minLength; i++) {
    for (const str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.substr(0, i);
      }
    }
  }
  return strs[0].substr(0, minLength);
};

module.exports = longestCommonPrefix;
