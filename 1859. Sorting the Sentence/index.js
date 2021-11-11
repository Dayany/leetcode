/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
	
  let sArray = s.split(/\s+/)  
	let resultArray = [];
	sArray.forEach((current) =>{
		let number =  current.substr(current.length - 1, 1);
		resultArray[number - 1] = current.substr(0, current.length - 1);
	})

	let result = ""
	resultArray.forEach((current, index, arr) => {

		result += current;
		if(index< arr.length - 1) result += " "
	})

	return result;
};

