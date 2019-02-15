import { removeElement } from './remove-element';
import { isEqualArray } from '../../utils/array.util';

test('Empty', () => {
  expect(removeElement([], 1)).toBe(0);
});

test('Single element', () => {
  const a = [1];
  expect(removeElement(a)).toBe(1);
  expect(isEqualArray(a, [1]));
});

test('Target not found', () => {
  const a = [1, 2];
  expect(removeElement(a, 3)).toBe(2);
  expect(isEqualArray(a, [1, 2]));
});

test('Single target element at the beginning', () => {
  const a = [1, 2, 3, 4];
  const length = removeElement(a, 1);
  expect(length).toBe(3);
  expect(isEqualArray(a.slice(0, length), [2, 3, 4]));
});

test('Single target in the middle', () => {
  const a = [1, 2, 3, 4];
  const length = removeElement(a, 3);
  expect(length).toBe(3);
  expect(isEqualArray(a.slice(0, length), [1, 2, 4]));
});

test('Single target in the end', () => {
  const a = [1, 2, 3, 4];
  const length = removeElement(a, 4);
  expect(length).toBe(3);
  expect(isEqualArray(a.slice(0, length), [1, 2, 3]));
});

test('Multiple target in the beginning', () => {
  const a = [1, 1, 1, 2, 3, 4];
  const length = removeElement(a, 1);
  expect(length).toBe(3);
  expect(isEqualArray(a.slice(0, length), [2, 3, 4]));
});

test('Multiple targets in the middle', () => {
  const a = [1, 1, 2, 2, 2, 3, 4];
  const length = removeElement(a, 2);
  expect(length).toBe(4);
  expect(isEqualArray(a.slice(0, length), [1, 1, 3, 4]));
});

test('Multiple targets in the end', () => {
  const a = [1, 1, 2, 3, 4, 4, 4];
  const length = removeElement(a, 4);
  expect(length).toBe(4);
  expect(isEqualArray(a.slice(0, length), [1, 1, 2, 3]));
});

test('Multiple targets sparse between', () => {
  const a = [1, 4, 1, 3, 1, 2, 4, 1, 1];
  const length = removeElement(a, 1);
  expect(length).toBe(4);
  expect(isEqualArray(a.slice(0, length), [4, 3, 2, 4]));
});
