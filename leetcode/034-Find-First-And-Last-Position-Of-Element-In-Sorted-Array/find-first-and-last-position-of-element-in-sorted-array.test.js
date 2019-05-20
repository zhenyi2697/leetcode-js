const searchRange = require('./find-first-and-last-position-of-element-in-sorted-array');

test('Empty nums', () => {
  expect(searchRange([], 1)).toEqual([-1, -1]);
});

test('Not found target small', () => {
  expect(searchRange([1, 2, 3], 0)).toEqual([-1, -1]);
});

test('Not found target large', () => {
  expect(searchRange([1, 2, 3], 4)).toEqual([-1, -1]);
});

test('All equal elements', () => {
  expect(searchRange([1, 1, 1, 1, 1], 1)).toEqual([0, 4]);
});

test('Single elements start', () => {
  expect(searchRange([1, 2, 3, 4, 5], 1)).toEqual([0, 0]);
});

test('Single element middle', () => {
  expect(searchRange([1, 2, 3, 4, 5], 2)).toEqual([1, 1]);
});

test('Single element larger middle', () => {
  expect(searchRange([1, 2, 3, 4, 5], 4)).toEqual([3, 3]);
});

test('Single element end', () => {
  expect(searchRange([1, 2, 3, 4, 5], 5)).toEqual([4, 4]);
});

test('Multi elements start', () => {
  expect(searchRange([1, 1, 1, 2, 3, 4], 1)).toEqual([0, 2]);
});

test('Multi elements middle across', () => {
  expect(searchRange([1, 1, 2, 2, 2, 3, 4, 5], 2)).toEqual([2, 4]);
});

test('Multi elements middle across severa', () => {
  expect(searchRange([1, 2, 3, 5, 5, 5, 6, 8, 9], 5)).toEqual([3, 5]);
});

test('Multi elements end', () => {
  expect(searchRange([1, 2, 3, 4, 5, 5, 5, 5], 5)).toEqual([4, 7]);
});
