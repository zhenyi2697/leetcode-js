const fourSum = require('./4sum');

test('Empty input', () => {
  expect(fourSum([], 0)).toEqual([]);
});

test('No solution', () => {
  expect(fourSum([1, 2, 3, 4], 0)).toEqual([]);
});

test('Single solution', () => {
  expect(fourSum([-1, 2, 1, -2], 0)).toEqual([[-2, -1, 1, 2]]);
});

test('Mulitple solution', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1]
  ]);
});

test('Multiple solution with repeating numbers', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2, 2, 3], 0)).toEqual([
    [-2, -1, 0, 3],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1]
  ]);
});

test('Single solution with negative numbers and small target', () => {
  expect(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)).toEqual([[-5, -4, -3, 1]]);
});

test('Multiple solution with negative number', () => {
  expect(fourSum([1, -2, -5, -4, -3, 3, 3, 5, 2], 8)).toEqual([
    [-3, 3, 3, 5],
    [-2, 2, 3, 5]
  ]);
});
