const longestPalindrome = require('./longest-palindromic-substring');

test('empty string', () => {
  expect(longestPalindrome(undefined)).toBe(undefined);
  expect(longestPalindrome('')).toBe('');
});

test('single letter string', () => {
  expect(longestPalindrome('a')).toBe('a');
});

test('two repeating letter', () => {
  expect(longestPalindrome('aa')).toBe('aa');
});

test('single letter', () => {
  const validResults = new Set(['a', 'b']);
  const result = longestPalindrome('ab');
  expect(validResults.has(result)).toBeTruthy();
});

test('odd string', () => {
  expect(longestPalindrome('cabad')).toBe('aba');
});

test('even string', () => {
  expect(longestPalindrome('cabbad')).toBe('abba');
});

test('multiple results same length', () => {
  const validResults = new Set(['bcb', 'ghg']);
  const result = longestPalindrome('abcbdfghgi');
  expect(validResults.has(result)).toBeTruthy();
});
