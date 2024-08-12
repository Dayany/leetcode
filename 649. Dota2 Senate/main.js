/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const senateArray = senate.split("");
  let RQueue = [];
  let DQueue = [];

  for (s in senateArray) {
    if (senateArray[s] === "R") {
      RQueue.push(parseInt(s));
    } else {
      DQueue.push(parseInt(s));
    }
  }

  while (RQueue.length > 0 && DQueue.length > 0) {
    let r = RQueue.shift();
    let d = DQueue.shift();
    if (r < d) {
      RQueue.push(r + senateArray.length);
    } else {
      DQueue.push(d + senateArray.length);
    }
  }

  if (RQueue.length > 0) {
    return "Radiant";
  } else {
    return "Dire";
  }
};
