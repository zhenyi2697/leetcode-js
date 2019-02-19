import { countAndSay } from './count-and-say';

test('1', () => {
  expect(countAndSay(1)).toBe('1');
});

test('2', () => {
  expect(countAndSay(2)).toBe('11');
});

test('3', () => {
  expect(countAndSay(3)).toBe('21');
});

test('4', () => {
  expect(countAndSay(4)).toBe('1211');
});

test('5', () => {
  expect(countAndSay(5)).toBe('111221');
});

test('6', () => {
  expect(countAndSay(6)).toBe('312211');
});
