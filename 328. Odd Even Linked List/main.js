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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;
  let temp;

  while (fast && fast.next) {
    temp = fast.next;

    fast.next = fast.next.next;
    temp.next = slow.next;
    slow.next = temp;

    slow = slow.next;
    fast = fast.next;
  }
  return head;
};
