// Source: https://leetcode.com/problems/add-two-numbers/
// Difficulty: Medium

import { ListNode } from '../../models/linked-list.model';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = (l1, l2) => {
  let remaining = 0;
  let result = new ListNode(-1);
  let n = result;
  while (l1 !== null || l2 !== null) {
    const x = l1 !== null ? l1.val : 0;
    const y = l2 !== null ? l2.val : 0;

    const sum = x + y + remaining;

    remaining = Math.floor(sum / 10);
    n.next = new ListNode(sum % 10);
    n = n.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (remaining !== 0) {
    n.next = new ListNode(remaining);
  }

  return result.next;
};
