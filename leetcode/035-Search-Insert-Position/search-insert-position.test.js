import { searchInsert } from './search-insert-position';

test('Empty nums', () => {
  expect(searchInsert([], 1)).toBe(0);
});

test('Single element source', () => {
  expect(searchInsert([1], 1)).toBe(0);
});

test('Single element not found smaller', () => {
  expect(searchInsert([1], 0)).toBe(0);
});

test('Single element not found larger', () => {
  expect(searchInsert([1], 2)).toBe(1);
});

test('Not found smaller', () => {
  expect(searchInsert([1, 3, 5, 7], 0)).toBe(0);
});

test('Not found in the smaller middle', () => {
  expect(searchInsert([1, 3, 5, 7], 2)).toBe(1);
});

test('Not found in the larger middle', () => {
  expect(searchInsert([1, 3, 5, 7], 6)).toBe(3);
});

test('Not found larger', () => {
  expect(searchInsert([1, 3, 5, 7], 10)).toBe(4);
});

test('Found first', () => {
  expect(searchInsert([1, 3, 5, 7], 1)).toBe(0);
});

test('Found middle smaller', () => {
  expect(searchInsert([1, 3, 5, 7], 3)).toBe(1);
});

test('Found middle larger', () => {
  expect(searchInsert([1, 3, 5, 7], 5)).toBe(2);
});

test('Found last', () => {
  expect(searchInsert([1, 3, 5, 7], 7)).toBe(3);
});
