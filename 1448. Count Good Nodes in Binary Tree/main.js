/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let result = 0;
  let max = -10000000000;
  function traverse(node, max) {
    if (!node) return;
    result = max <= node.val ? result + 1 : result;
    let nextMax = Math.max(node.val, max);
    node?.left && traverse(node.left, nextMax);
    node?.right && traverse(node.right, nextMax);
  }
  traverse(root, max);
  return result;
};
