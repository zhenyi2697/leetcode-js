// Source: https://leetcode.com/problems/roman-to-integer/
// Difficulty: Easy

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  let i = 0;

  while (i < s.length - 1) {
    const curr = mapping[s[i]];
    const next = mapping[s[i + 1]];
    if (next > curr) {
      result += next - curr;
      i += 2;
    } else {
      result += curr;
      i++;
    }
  }

  if (i === s.length - 1) {
    result += mapping[s[i]];
  }

  return result;
};

module.exports = romanToInt;
