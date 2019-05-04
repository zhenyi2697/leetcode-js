// Source: https://leetcode.com/problems/longest-palindromic-substring/
// Difficulty: Medium

/**
 * Expand from middle index
 * @param {number} left start index
 * @param {number} right start index
 * @returns {number} length of the whole paindromic string
 */
const expandFromMiddle = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  if (!s || s.length < 2) {
    return s;
  }

  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const l1 = expandFromMiddle(s, i, i); // odd string
    const l2 = expandFromMiddle(s, i, i + 1); // even string
    const len = Math.max(l1, l2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};

module.exports = longestPalindrome;
