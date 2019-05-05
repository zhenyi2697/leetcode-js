const myAtoi = require('./string-to-integer');

test('Empty string', () => {
  expect(myAtoi('   ')).toBe(0);
});

test('Spaces around', () => {
  expect(myAtoi(' 123 ')).toBe(123);
});

test('Starts with word', () => {
  expect(myAtoi('abc123')).toBe(0);
});

test('End with word', () => {
  expect(myAtoi('1234abc')).toBe(1234);
});

test('Leading 0s', () => {
  expect(myAtoi('0012345')).toBe(12345);
});

test('0 in the middle', () => {
  expect(myAtoi('1023')).toBe(1023);
});

test('Negative number', () => {
  expect(myAtoi('-123')).toBe(-123);
});

test('Positive sign', () => {
  expect(myAtoi('+123')).toBe(123);
});

test('Negative overflow', () => {
  expect(myAtoi('-91283472332')).toBe(-2147483648);
});

test('Positive overflow', () => {
  expect(myAtoi('91283472332')).toBe(2147483647);
});
