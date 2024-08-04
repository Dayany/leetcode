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
var maxDepth = function (root) {
  let level = 0;
  let max = 0;

  function findDepth(node) {
    if (node) {
      level++;
      max = Math.max(max, level);
      findDepth(node.left);
      findDepth(node.right);
      level--;
    }
  }

  findDepth(root);
  return max;
};
