export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export const isEqualLinkedList = (l1, l2) => {
  while (l1 !== null && l2 !== null) {
    if (l1.val !== l2.val) {
      return false;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return l1 === null && l2 === null;
};

export const constructLinkedList = items => {
  const head = new ListNode(null);
  let n = head;

  items.forEach(item => {
    n.next = new ListNode(item);
    n = n.next;
  });

  return head.next;
};
