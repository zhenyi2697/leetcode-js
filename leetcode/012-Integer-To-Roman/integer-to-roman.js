// Source: https://leetcode.com/problems/integer-to-roman/
// Difficulty: Medium

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
  const values = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];
  const sources = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const result = [];

  for (let i = 0; i < sources.length; i++) {
    if (num >= sources[i]) {
      const count = Math.floor(num / sources[i]);
      num %= count * sources[i];
      for (let j = 0; j < count; j++) {
        result.push(values[i]);
      }
    }
  }
  return result.join('');
};

module.exports = intToRoman;
