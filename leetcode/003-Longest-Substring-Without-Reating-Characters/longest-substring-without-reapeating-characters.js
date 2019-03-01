// Source: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Difficulty: Medium

/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = s => {
  let max = 0;
  const map = new Map();

  for (let start = 0, i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c) && map.get(c) >= start) {
      start = map.get(c) + 1;
    }
    map.set(c, i);
    max = Math.max(max, i - start + 1);
  }

  return max;
};
