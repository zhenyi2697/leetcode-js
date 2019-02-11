import longestCommonPrefix from './longest-common-prefix';

test('Empty array', () => {
  expect(longestCommonPrefix([])).toBe('');
});

test('Empty strings', () => {
  expect(longestCommonPrefix(['', '', ''])).toBe('');
});

test('Empty strings among others', () => {
  expect(longestCommonPrefix(['abc', 'abd', ''])).toBe('');
});

test('Single character', () => {
  expect(longestCommonPrefix(['a'])).toBe('a');
});

test('Single string', () => {
  expect(longestCommonPrefix(['abc'])).toBe('abc');
});

test('Multi with common prefix', () => {
  expect(longestCommonPrefix(['abc', 'abd', 'abefg'])).toBe('ab');
});

test('Multi without common prefix', () => {
  expect(longestCommonPrefix(['abc', 'bcd', 'cde'])).toBe('');
});
