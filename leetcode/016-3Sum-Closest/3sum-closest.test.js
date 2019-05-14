const threeSumClosest = require('./3sum-closest');

test('Empty input', () => {
  expect(threeSumClosest([], 1)).toBe(null);
});

test('Exact match', () => {
  expect(threeSumClosest([1, 1, 1], 3)).toBe(3);
});

test('Unique elements with larger target', () => {
  expect(threeSumClosest([1, 1, 1, 1], 5)).toBe(3);
});

test('Unique elements with smaller target', () => {
  expect(threeSumClosest([1, 1, 1, 1], 0)).toBe(3);
});

test('Negative numbers with larget target', () => {
  expect(threeSumClosest([-4, -3, -2, -1], 0)).toBe(-6);
});

test('Negative numbers with smaller target', () => {
  expect(threeSumClosest([-4, -3, -2, -1], -20)).toBe(-9);
});

test('Mixed input with exact match', () => {
  expect(threeSumClosest([-1, 2, 1, -3], 0)).toBe(0);
});

test('Mixed input with larger input', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});
