import { lengthOfLongestSubstring } from './longest-substring-without-reapeating-characters';

test('Empty', () => {
  expect(lengthOfLongestSubstring('')).toBe(0);
});

test('Single letter', () => {
  expect(lengthOfLongestSubstring('a')).toBe(1);
});

test('Repeating letter', () => {
  expect(lengthOfLongestSubstring('aaaaaaa')).toBe(1);
});

test('Non repeating letter length > 1', () => {
  expect(lengthOfLongestSubstring('abbbba')).toBe(2);
});

test('Repeating sequence', () => {
  expect(lengthOfLongestSubstring('abcabcab')).toBe(3);
});

test('Sequence in the end', () => {
  expect(lengthOfLongestSubstring('aaaaabcdef')).toBe(6);
});

test('Whole sequence', () => {
  expect(lengthOfLongestSubstring('abcdef')).toBe(6);
});

test('Subsequence', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});
