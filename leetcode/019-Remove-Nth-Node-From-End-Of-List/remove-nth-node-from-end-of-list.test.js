const removeNthFromEnd = require('./remove-nth-node-from-end-of-list');
import {
  constructLinkedList,
  isEqualLinkedList
} from '../../models/linked-list.model';

test('Single element', () => {
  const input = constructLinkedList([1]);
  const result = removeNthFromEnd(input, 1);
  const expected = constructLinkedList([]);
  expect(isEqualLinkedList(expected, result)).toBeTruthy();
});

test('Remove head', () => {
  const input = constructLinkedList([1, 2, 3]);
  const result = removeNthFromEnd(input, 3);
  const expected = constructLinkedList([2, 3]);
  expect(isEqualLinkedList(expected, result)).toBeTruthy();
});

test('Remove middle element', () => {
  const input = constructLinkedList([1, 2, 3, 4, 5]);
  const result = removeNthFromEnd(input, 2);
  const expected = constructLinkedList([1, 2, 3, 5]);
  expect(isEqualLinkedList(expected, result)).toBeTruthy();
});

test('Remove tail', () => {
  const input = constructLinkedList([1, 2, 3, 4, 5]);
  const result = removeNthFromEnd(input, 1);
  const expected = constructLinkedList([1, 2, 3, 4]);
  expect(isEqualLinkedList(expected, result)).toBeTruthy();
});
