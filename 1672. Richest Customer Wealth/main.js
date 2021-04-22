/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result = 0;
  accounts.forEach((customer) => {
    let currentSum = 0;

    customer.forEach((bankAccount) => {
      currentSum += bankAccount;
    });
    if (currentSum > result) {
      result = currentSum;
    }
  });
  return result;
};
