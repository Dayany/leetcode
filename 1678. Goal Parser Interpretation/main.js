/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let result = "";
  for (var i = 0; i < command.length; i++) {
    switch (command.charAt([i])) {
      case "G":
        result += "G";
        continue;
      case ")":
        result += "o";
        continue;
      case "l": {
        result += "al";
        i++;
      }
      default:
    }
  }
  return result;
};
