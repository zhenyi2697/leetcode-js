import { addTwoNumbers } from './add-two-numbers';
import {
  constructLinkedList,
  isEqualLinkedList
} from '../../models/linked-list.model';

test('Both Empty', () => {
  const l1 = constructLinkedList([]);
  const l2 = constructLinkedList([]);
  expect(addTwoNumbers(l1, l2)).toBe(null);
});

test('First Empty', () => {
  const l1 = constructLinkedList([]);
  const l2 = constructLinkedList([1, 2, 3]);
  expect(isEqualLinkedList(l2, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('Second Empty', () => {
  const l1 = constructLinkedList([1, 2, 3]);
  const l2 = constructLinkedList([]);
  expect(isEqualLinkedList(l1, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('One element equal length', () => {
  const l1 = constructLinkedList([1]);
  const l2 = constructLinkedList([3]);
  const expected = constructLinkedList([4]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('One element equal length overflow', () => {
  const l1 = constructLinkedList([6]);
  const l2 = constructLinkedList([7]);
  const expected = constructLinkedList([3, 1]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('One element unequal length', () => {
  const l1 = constructLinkedList([1]);
  const l2 = constructLinkedList([6, 8]);
  const expected = constructLinkedList([7, 8]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('One element unequal length overflow', () => {
  const l1 = constructLinkedList([1]);
  const l2 = constructLinkedList([9, 8]);
  const expected = constructLinkedList([0, 9]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('Equal length', () => {
  const l1 = constructLinkedList([1, 2, 3]);
  const l2 = constructLinkedList([3, 2, 1]);
  const expected = constructLinkedList([4, 4, 4]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('Equal length overflow middle', () => {
  const l1 = constructLinkedList([3, 7, 5]);
  const l2 = constructLinkedList([3, 6, 1]);
  const expected = constructLinkedList([6, 3, 7]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('Equal length overflow end', () => {
  const l1 = constructLinkedList([3, 7, 5]);
  const l2 = constructLinkedList([3, 6, 4]);
  const expected = constructLinkedList([6, 3, 0, 1]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('Unequal length overflow middle', () => {
  const l1 = constructLinkedList([7, 5]);
  const l2 = constructLinkedList([3, 6, 1]);
  const expected = constructLinkedList([0, 2, 2]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});

test('Unequal length overflow end', () => {
  const l1 = constructLinkedList([7, 5]);
  const l2 = constructLinkedList([3, 6, 9]);
  const expected = constructLinkedList([0, 2, 0, 1]);
  expect(isEqualLinkedList(expected, addTwoNumbers(l1, l2))).toBeTruthy();
});
