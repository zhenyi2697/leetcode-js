const swapPairs = require('./swap-nodes-in-pairs');
import {
  constructLinkedList,
  isEqualLinkedList
} from '../../models/linked-list.model';

test('Empty list', () => {
  expect(swapPairs(null)).toBeNull();
});

test('Single element', () => {
  const input = constructLinkedList([1]);
  const result = swapPairs(input);
  const expected = constructLinkedList([1]);
  expect(isEqualLinkedList(expected, result)).toBeTruthy();
});

test('Two elements', () => {
  const input = constructLinkedList([1, 2]);
  const result = swapPairs(input);
  const expected = constructLinkedList([2, 1]);
  expect(isEqualLinkedList(expected, result)).toBeTruthy();
});

test('Odd number of elements', () => {
  const input = constructLinkedList([1, 2, 3, 4, 5]);
  const result = swapPairs(input);
  const expected = constructLinkedList([2, 1, 4, 3, 5]);
  expect(isEqualLinkedList(expected, result)).toBeTruthy();
});

test('Even number of elements', () => {
  const input = constructLinkedList([1, 2, 3, 4, 5, 6]);
  const result = swapPairs(input);
  const expected = constructLinkedList([2, 1, 4, 3, 6, 5]);
  expect(isEqualLinkedList(expected, result)).toBeTruthy();
});
