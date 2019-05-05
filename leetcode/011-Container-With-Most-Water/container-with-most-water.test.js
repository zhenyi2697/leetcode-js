const maxArea = require('./container-with-most-water');

test('2 element only', () => {
  expect(maxArea([1, 3])).toBe(1);
});

test('Multiple element', () => {
  expect(maxArea([1, 3, 2, 4])).toBe(6);
});

test('All equal elements', () => {
  expect(maxArea([3, 3, 3, 3, 3])).toBe(12);
});

test('Multiple height', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});
