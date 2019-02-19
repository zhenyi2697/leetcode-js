import { strStr } from './implement-strStr';

test('Empty source', () => {
  expect(strStr('', 'a')).toBe(-1);
});

test('Empty needle', () => {
  expect(strStr('abc', '')).toBe(0);
});

test('Single char source equal', () => {
  expect(strStr('a', 'a')).toBe(0);
});

test('Single char source unequal', () => {
  expect(strStr('a', 'b')).toBe(-1);
});

test('Multile char equal string', () => {
  expect(strStr('abc', 'abc')).toBe(0);
});

test('Multiple char source single needle start', () => {
  expect(strStr('abc', 'a')).toBe(0);
});

test('Multiple char source single needle middle', () => {
  expect(strStr('abc', 'b')).toBe(1);
});

test('Multiple char source single needle end', () => {
  expect(strStr('abc', 'c')).toBe(2);
});

test('Mulitple char source multile needle start', () => {
  expect(strStr('abcde', 'ab')).toBe(0);
});

test('Mulitple char source multile needle start', () => {
  expect(strStr('abcde', 'cd')).toBe(2);
});

test('Mulitple char source multile needle start', () => {
  expect(strStr('abcde', 'de')).toBe(3);
});
