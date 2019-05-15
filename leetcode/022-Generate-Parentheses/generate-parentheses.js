// Source: https://leetcode.com/problems/generate-parentheses/
// Difficulty: Medium

/**
 * Generate parentheses using backtracking
 * Time complexity O(4^n/sqrt(n)) for n-th Catalan number
 *
 * @param {*} results
 * @param {*} prefix
 * @param {*} open
 * @param {*} close
 * @param {*} n
 */
const backtrackGenerate = (results, prefix, open, close, n) => {
  if (prefix.length === n * 2) {
    results.push(prefix);
  } else {
    if (open < n) backtrackGenerate(results, prefix + '(', open + 1, close, n);
    if (close < open)
      backtrackGenerate(results, prefix + ')', open, close + 1, n);
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const results = [];
  backtrackGenerate(results, '', 0, 0, n);
  return results;
};

module.exports = generateParenthesis;
