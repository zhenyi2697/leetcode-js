// Source: https://leetcode.com/problems/valid-parentheses/
// Difficulty: Easy

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const mapping = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const stack = [];
  for (let c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else if (stack.pop() !== mapping[c]) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
