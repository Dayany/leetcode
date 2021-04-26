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
var sumEvenGrandparent = function (root) {
  let result = 0;

  const sumGrandchildren = function (root) {
    if (
      !root?.left?.left &&
      !root?.left?.right &&
      !root?.right?.left &&
      !root?.right?.right
    ) {
      return;
    }
    if (root.val % 2 === 0) {
      leftCNode = root.left;
      rightCNode = root.right;
      rightCNode?.left ? (result += rightCNode.left.val) : null;
      rightCNode?.right ? (result += rightCNode.right.val) : null;
      leftCNode?.left ? (result += leftCNode.left.val) : null;
      leftCNode?.right ? (result += leftCNode.right.val) : null;
    }
    sumGrandchildren(root.left);
    sumGrandchildren(root.right);
  };

  sumGrandchildren(root);
  return result;
};
