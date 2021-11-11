/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
	seats.sort( (a, b) => a-b );	
	students.sort((a,b) => a-b);
	let result = 0;

	for (let i = 0; i < seats.length; i++){
		while(seats[i] !== students[i]){
			if(students[i] < seats[i]){
				students[i] += 1;	
			}else{
				students[i] -= 1;	
			}
			result++;
		}
	}	
	return result;
};

