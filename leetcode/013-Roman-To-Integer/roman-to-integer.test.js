import romanToInt from './roman-to-integer';

test('I', () => {
  expect(romanToInt('III')).toBe(3);
});

test('IV', () => {
  expect(romanToInt('IV')).toBe(4);
});

test('VIII', () => {
  expect(romanToInt('VIII')).toBe(8);
});

test('IX', () => {
  expect(romanToInt('IX')).toBe(9);
});

test('MMDCCXL', () => {
  expect(romanToInt('MMDCCXLI')).toBe(2741);
});

test('MMMCDXC', () => {
  expect(romanToInt('MMMCDXC')).toBe(3490);
});

test('MCMLXXXVIII', () => {
  expect(romanToInt('MCMLXXXVIII')).toBe(1988);
});
