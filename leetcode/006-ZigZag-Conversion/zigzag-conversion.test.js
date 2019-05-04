const convert = require('./zigzag-conversion');

test('empty string', () => {
  expect(convert(undefined, 1)).toBe(undefined);
  expect(convert('', 1)).toBe('');
});

test('row < s.length', () => {
  expect(convert('abc', 5)).toBe('abc');
});

test('single row', () => {
  expect(convert('abcde', 1)).toBe('abcde');
});

test('2 rows', () => {
  expect(convert('abcde', 2)).toBe('acebd');
});

test('remaining all in a row', () => {
  expect(convert('abcdefghij', 4)).toBe('agbfhceidj');
});

test('remaining with extra col', () => {
  expect(convert('abcdefghijkl', 4)).toBe('agbfhlceikdj');
});
