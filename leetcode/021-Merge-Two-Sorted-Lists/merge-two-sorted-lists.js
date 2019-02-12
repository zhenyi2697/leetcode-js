// Source: https://leetcode.com/problems/merge-two-sorted-lists/
// Difficulty: Easy

import { ListNode } from '../../models/linked-list.model';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const mergeTwoLists = (l1, l2) => {
  const result = new ListNode(null);
  let n = result;

  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      n.next = l2;
      l2 = l2.next;
    } else if (l2 === null) {
      n.next = l1;
      l1 = l1.next;
    } else if (l1.val < l2.val) {
      n.next = l1;
      l1 = l1.next;
    } else {
      n.next = l2;
      l2 = l2.next;
    }
    n = n.next;
  }

  return result.next;
};
