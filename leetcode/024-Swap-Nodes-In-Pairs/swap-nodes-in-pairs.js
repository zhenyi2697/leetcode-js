// Source: https://leetcode.com/problems/swap-nodes-in-pairs/
// Difficulty: Medium

import { ListNode } from '../../models/linked-list.model';

/**
 * Swap node first and second
 * @param {*} prev
 * @param {*} first
 * @param {*} second
 */
const swapNodes = (prev, first, second) => {
  second.next = first.next;
  first.next = second;
  prev.next = first;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = head => {
  if (head === null) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let second = head;
  let first = head.next;

  while (first !== null) {
    swapNodes(prev, first, second);
    prev = prev.next.next;
    second = prev.next;
    first = second === null ? null : second.next;
  }

  return dummy.next;
};

module.exports = swapPairs;
