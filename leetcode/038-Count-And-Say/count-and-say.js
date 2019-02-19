// Source: https://leetcode.com/problems/count-and-say/
// Difficulty: Easy

/**
 * @param {number} n
 * @return {string}
 */
export const countAndSay = n => {
  let result = '1';
  let i = 1;

  while (i++ < n) {
    result = countOccurence(result);
  }

  return result;
};

const countOccurence = text => {
  let result = [];
  let i = 0;

  while (i < text.length) {
    let count = 1;
    while (text[i + 1] && text[i + 1] === text[i]) {
      count++;
      i++;
    }
    result.push(`${count}${text[i]}`);
    i++;
  }

  return result.join('');
};
