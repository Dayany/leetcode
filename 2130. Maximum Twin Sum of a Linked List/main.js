/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head;
  let level = 0;
  if (!head.next) return 0;

  while (fast.val !== null) {
    level++;
    let temp = slow;
    fast = fast.next;
    slow = slow.next;
    if (fast?.next) {
      fast = fast?.next;
    }

    if (fast.next === null) {
      temp.next = slow.next;
      break;
    }
  }

  let sum = [];
  let point = 0;
  let current = head;
  let result = 0;
  while (slow !== null) {
    level--;
    sum[point] = sum[point] ? sum[point] + current.val : current.val;
    sum[level] = sum[level] ? sum[level] + slow.val : slow.val;
    let currentMax = sum[level] > sum[point] ? sum[level] : sum[point];
    point++;
    slow = slow.next;
    current = current.next;
    result = result > currentMax ? result : currentMax;
  }

  return result;
};
