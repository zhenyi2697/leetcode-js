import {
  constructLinkedList,
  isEqualLinkedList
} from '../../models/linked-list.model';
import { mergeTwoLists } from './merge-two-sorted-lists';

test('Empty lists', () => {
  const merged = mergeTwoLists(null, null);
  expect(isEqualLinkedList(merged, null)).toBeTruthy();
});

test('First empty', () => {
  const l2 = constructLinkedList([1, 2, 3]);
  const merged = mergeTwoLists(null, l2);
  expect(isEqualLinkedList(merged, l2));
});

test('Second emtpy', () => {
  const l1 = constructLinkedList([1, 2, 3]);
  const merged = mergeTwoLists(l1, null);
  expect(isEqualLinkedList(merged, l1));
});

test('Equal length', () => {
  const l1 = constructLinkedList([1, 2, 3]);
  const l2 = constructLinkedList([1, 3, 5]);
  const merged = mergeTwoLists(l1, l2);
  const expected = constructLinkedList([1, 1, 2, 3, 3, 5]);
  expect(isEqualLinkedList(expected, merged)).toBeTruthy();
});

test('First longer', () => {
  const l1 = constructLinkedList([1, 2, 3, 4]);
  const l2 = constructLinkedList([1, 3, 5]);
  const merged = mergeTwoLists(l1, l2);
  const expected = constructLinkedList([1, 1, 2, 3, 3, 4, 5]);
  expect(isEqualLinkedList(expected, merged)).toBeTruthy();
});

test('Second longer', () => {
  const l1 = constructLinkedList([1, 2, 4]);
  const l2 = constructLinkedList([1, 1, 3, 5]);
  const merged = mergeTwoLists(l1, l2);
  const expected = constructLinkedList([1, 1, 1, 2, 3, 4, 5]);
  expect(isEqualLinkedList(expected, merged)).toBeTruthy();
});
