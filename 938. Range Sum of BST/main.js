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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let result = 0;
  const traverse = function (root, low, high) {
    if (root === null) return;
    if (root.val >= low && root.val <= high) result += root.val;

    traverse(root.left, low, high);
    traverse(root.right, low, high);
  };
  traverse(root, low, high);
  return result;
};
