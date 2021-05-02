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
var deepestLeavesSum = function (root) {
  let result = 0;
  let level = 0;
  let sum = [];
  const traverse = (root, level) => {
    if (!sum[level]) {
      sum[level] = [];
    }
    if (
      !root.left?.left &&
      !root.left?.right &&
      !root.right?.left &&
      !root.right?.right
    ) {
      root.left ? sum[level].push(root.left.val) : null;
      root.right ? sum[level].push(root.right.val) : null;
      return;
    }

    root.left ? traverse(root.left, level + 1) : null;
    root.right ? traverse(root.right, level + 1) : null;
  };

  traverse(root, level);
  result = sum[sum.length - 1].reduce((a, b) => {
    return a + b;
  });
  return result;
};
