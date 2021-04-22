/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;
  for (let i = 0; i < n.toString().length; i++) {
    let currentNum = parseInt(n.toString().charAt(i));
    product *= currentNum;
    sum += currentNum;
  }

  return product - sum;
};
