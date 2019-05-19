const search = require('./search-in-rotated-sorted-array');

test('Empty', () => {
  expect(search([], 0)).toBe(-1);
});

test('No found', () => {
  expect(search([1, 2, 3, 4], 0)).toBe(-1);
});

test('Left sorted and target in left', () => {
  expect(search([4, 5, 6, 7, 8, 1, 2, 3], 5)).toBe(1);
});

test('Left sorted and target in right', () => {
  expect(search([4, 5, 6, 7, 8, 1, 2, 3], 8)).toBe(4);
});

test('Right sorted and target in left', () => {
  expect(search([5, 1, 2, 3, 4], 1)).toBe(1);
});

test('Right sorted and target in right', () => {
  expect(search([5, 1, 2, 3, 4], 3)).toBe(3);
});

test('Should also work for sorted array', () => {
  expect(search([1, 2, 3, 4], 1)).toBe(0);
});
