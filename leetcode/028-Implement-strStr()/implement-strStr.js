// Source: https://leetcode.com/problems/implement-strstr/
// Difficulty: Easy

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const strStr = (haystack, needle) => {
  if (needle.length === 0) {
    return 0;
  }

  const N = haystack.length;
  const M = needle.length;

  for (let i = 0; i < N - M + 1; i++) {
    let j = 0;
    for (j = 0; j < M; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === M) {
      return i;
    }
  }
  return -1;
};
