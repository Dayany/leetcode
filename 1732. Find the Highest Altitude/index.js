/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let highestAltitude = 0;
  let currentAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    if (currentAltitude > highestAltitude) {
      highestAltitude = currentAltitude;
    }
  }
  return highestAltitude;
};
