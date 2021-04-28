/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let groupIndex = [];
  let groups = [];
  let result = [];

  for (let i = 0; i < groupSizes.length; i++) {
    if (groups[`p${groupSizes[i]}`]) {
      groups[`p${groupSizes[i]}`].map((curr, index) => {
        if (index === groups[`p${groupSizes[i]}`].length - 1) {
          if (curr.length < groupSizes[i]) {
            curr.push(i);
          } else {
            groups[`p${groupSizes[i]}`].push([i]);
            groupIndex.push(`p${groupSizes[i]}`);
          }
        }
      });
    } else {
      groups[`p${groupSizes[i]}`] = [];
      groups[`p${groupSizes[i]}`].push([i]);
      groupIndex.push(`p${groupSizes[i]}`);
    }
  }
  const filteredGroupIndex = [...new Set(groupIndex)];
  filteredGroupIndex.map((group) => {
    groups[group].map((curr) => {
      result.push(curr);
    });
  });

  return result;
};
