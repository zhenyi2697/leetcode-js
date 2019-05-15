// Source: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Difficulty: Medium

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let first = head;
  let second = head;

  while (--n >= 0) {
    first = first.next;
  }

  if (first === null) return head.next;

  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return head;
};

module.exports = removeNthFromEnd;
