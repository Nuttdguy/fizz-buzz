//Fizz-Buzz
//Objective: Print out each number from 1 to 100.
//For every number divisable by 3, replace with the word fizz
//For every number divisable by 5, replace with the word buzz
//For every number divisable by both 3 & 5, replace with fizz buzz

//1. Check the value of count
//2. Modulo the count by the current-count
//3. Use control flow to determine output

$(document).ready(function() {

	for (count = 1; count <= 100;) {
		if (count % 3 === 0) {
			if (count % 5 === 0) {
				$('.number-container').append('<h1>Fizz-Buzz</h1>');
			} else {
				$('.number-container').append('<h1>Fizz</h1>');
			} 
		} else if (count % 5 === 0) {
			$('.number-container').append('<h1>Buzz</h1>');
		} else {
			$('.number-container').append('<h1>' + count + '</h1>');
		}
		
	console.log(count)
	count++;
	}
});








