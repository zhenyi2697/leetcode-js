// Source: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Difficulty: Medium

/**
 * Compute results with back tracking
 * Results will be added into results array
 *
 * @param {Map} dict
 * @param {string[]} results
 * @param {string} prefix
 * @param {string[]} keys
 * @param {number} i current index
 */
const computeResults = (dict, results, prefix, keys, i) => {
  if (i === keys.length) {
    results.push(prefix);
  } else {
    for (let v of dict.get(keys[i])) {
      computeResults(dict, results, prefix + v, keys, i + 1);
    }
  }
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  const dict = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ]);

  const results = [];
  if (digits.length === 0) return results;
  computeResults(dict, results, '', digits.split(''), 0);
  return results;
};

module.exports = letterCombinations;
