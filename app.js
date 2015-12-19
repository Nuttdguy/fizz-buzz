$(document).ready(function() {
	
	fizzBuzz();
	resetFizzBuzz();
	
});

var resetFizzBuzz = function() {
	
	// for resetting the screen
	$(this).on('keydown', function() {
		$('.main-section h1').remove();
	});
	
}

var fizzBuzz = function() {
	
	$(this).keypress(function(k) {
		var keyPress = k.which;
		console.log(keyPress); // capture the current keypress event
		
		var inputBoxValue; // variable for storing users inputted value
		if (keyPress === 13) {
			
			function resetInput() {
				$('.enter-number').val('');
			} // named function that resets the number input box
			
			var inputValue = $('.enter-number').val();
			if (!$.isNumeric(inputValue)) {
				resetInput(); // could I just put return here?? End the program
			} else {
				inputBoxValue = parseInt($('.enter-number').val());
				// assigning the users input value. Returns to global variable/scope.
			}
			resetInput(); // resets the input box after value has been stored.
			
		}	
		
		// the program for fizz-buzz
		function runFizzBuzz(userInput) {
			for (count = userInput; count <= 100;) {
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
			count++;
			}
		}
		// instantiate the function and passing the users input value
		runFizzBuzz(inputBoxValue);	
	})
};





