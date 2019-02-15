import { isEqualArray } from './array.util';

test('Emtpy array', () => {
  expect(isEqualArray([], [])).toBeTruthy();
});

test('Empty and non empty one', () => {
  expect(isEqualArray([], [1])).toBeFalsy();
});

test('Equal length same value', () => {
  expect(isEqualArray([1, 2, 3], [1, 2, 3])).toBeTruthy();
});

test('Unequal length', () => {
  expect(isEqualArray([1, 2, 3], [1, 2, 3, 4])).toBeFalsy();
});

test('Equal length different value', () => {
  expect(isEqualArray([1, 2, 3], [1, 2, 4])).toBeFalsy();
});
