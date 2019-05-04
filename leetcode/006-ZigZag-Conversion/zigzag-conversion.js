// Source: https://leetcode.com/problems/zigzag-conversion/
// Difficulty: Medium

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, row) => {
  if (!s || s.length <= row || row === 1) {
    return s;
  }

  const result = [];
  for (let i = 0; i < row; i++) {
    result.push([]);
  }

  let curRow = 0;
  let goingDown = false;
  for (let i = 0; i < s.length; i++) {
    result[curRow].push(s[i]);
    if (curRow === 0 || curRow === row - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }

  return result.map(row => row.join('')).join('');
};

module.exports = convert;
