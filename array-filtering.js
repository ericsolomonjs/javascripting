function filter (number) {
	let workingNumbers = [];
	for (var i = 0; i < number.length; i++) {
		
		if (number[i] % 2 === 0){
			workingNumbers.push(number[i]);
		}
		
	}
	return workingNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

let filtered = filter(numbers);

console.log(filtered);