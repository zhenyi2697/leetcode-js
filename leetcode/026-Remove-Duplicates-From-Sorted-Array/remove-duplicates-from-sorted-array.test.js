import { removeDuplicates } from './remove-duplicates-from-sorted-array';
import { isEqualArray } from '../../utils/array.util';

test('Empty array', () => {
  const a = [];
  expect(removeDuplicates(a)).toBe(0);
});

test('Single element', () => {
  const a = [1];
  expect(removeDuplicates(a)).toBe(1);
  expect(isEqualArray(a, [1])).toBeTruthy();
});

test('Sorted without duplicates', () => {
  const a = [1, 2, 5];
  const length = removeDuplicates(a);
  expect(length).toBe(3);
  expect(isEqualArray(a.slice(0, length), [1, 2, 5])).toBeTruthy();
});

test('Sorted with duplicateds', () => {
  const a = [1, 1, 2, 2, 5, 6];
  const length = removeDuplicates(a);
  expect(length).toBe(4);
  expect(isEqualArray(a.slice(0, length), [1, 2, 5, 6])).toBeTruthy();
});
