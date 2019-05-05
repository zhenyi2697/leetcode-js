const intToRoman = require('./integer-to-roman');

test('3', () => {
  expect(intToRoman(3)).toBe('III');
});

test('4', () => {
  expect(intToRoman(4)).toBe('IV');
});

test('8', () => {
  expect(intToRoman(8)).toBe('VIII');
});

test('9', () => {
  expect(intToRoman(9)).toBe('IX');
});

test('1988', () => {
  expect(intToRoman(1988)).toBe('MCMLXXXVIII');
});

test('2741', () => {
  expect(intToRoman(2741)).toBe('MMDCCXLI');
});

test('3490', () => {
  expect(intToRoman(3490)).toBe('MMMCDXC');
});
