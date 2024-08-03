/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let slow = head;
  let fast = head;

  if (!head.next) return head.next;

  while (fast.val !== null) {
    let temp = slow;
    fast = fast.next;
    slow = slow.next;
    if (fast?.next) {
      fast = fast?.next;
    }

    if (fast.next === null) {
      temp.next = slow.next;
      return head;
    }
  }
  return head;
};
