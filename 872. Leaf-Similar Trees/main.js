/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let leaf1 = [];
  let leaf2 = [];

  function findLeafs(root, leaf) {
    if (!root) return;

    root.left && findLeafs(root.left, leaf);
    root.right && findLeafs(root.right, leaf);

    if (!root.left && !root.right) {
      leaf.push(root.val);
      return;
    }
  }
  findLeafs(root1, leaf1);
  findLeafs(root2, leaf2);

  return leaf1.join(",") === leaf2.join(",");
};
