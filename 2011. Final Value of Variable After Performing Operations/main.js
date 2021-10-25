/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  operations.map((operation) => {
    if (operation.includes("++")) {
      x++;
    } else {
      x--;
    }
  });
  return x;
};
