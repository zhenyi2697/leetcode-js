const reverse = require('./reverse-integer');

test('0', () => {
  expect(reverse(0)).toBe(0);
});

test('single number', () => {
  expect(reverse(5)).toBe(5);
});

test('multiple number', () => {
  expect(reverse(123)).toBe(321);
});

test('negative number', () => {
  expect(reverse(-123)).toBe(-321);
});

test('trailing single 0', () => {
  expect(reverse(1230)).toBe(321);
});

test('trailing 0s', () => {
  expect(reverse(90000)).toBe(9);
});

test('0 in the middle', () => {
  expect(reverse(1203)).toBe(3021);
});

test('overflow', () => {
  expect(reverse(1534236469)).toBe(0);
});

test('negative overflow', () => {
  expect(reverse(-1534236469)).toBe(0);
});
