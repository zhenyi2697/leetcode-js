import { twoSum } from './two-sum';

test('one solution', () => {
  const result = twoSum([1, 3, 4, 6], 9);
  expect(result).toContain(1);
  expect(result).toContain(3);
});

test('no solution empty array', () => {
  expect(twoSum([], 9).length).toBe(0);
});

test('no solution target not found', () => {
  expect(twoSum([1, 3, 4, 6], 11).length).toBe(0);
});
