var blankAnswer = document.getElementById('blankAnswer');
var submit = document.getElementById('try');



// Our Possible Answers
var words = ["cat", "bird", "horse"]

// Randomly Generate a word to guess
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// Where the answer will be displayed as blank spaces
var answer = [];
// for loop to generate the amount of spaces needed for the answer to be displayed
for (i=0; i < word.length; i++){
	answer[i] = " _ ";
}
console.log(answer)

// Display the blank spaces on the screen, .join removes the commas
blankAnswer.innerHTML = answer.join(' ');



var availableLetters = "qwertyuiopasdfghjklzxcvbnm";
	// console.log(availableLetters[1]);

// click submit to guess a letter after typing one in
submit.addEventListener('click', function(){
	// function for checking guess
	// Letters to pick from
	// var availableLetters = "qwertyuiopasdfghjklzxcvbnm";
	// links the guess to what is typed in the box
	var guess = document.getElementById('playerGuess').value;
		for (i=0; i <= word.length; i++) {
		if (guess.length !== 1) {
			alert("Player can only guess one letter at a time!");
			break;
		} else if (guess !== word[i]){
			console.log("There are no " + guess + "'s guess again")
		} else {
			alert("There is a " + guess);
		}
	}
})

	// if (guess === word) {
	// 	alert("I have a " + guess);
	// } else if (guess !== word) {
	// 	alert ("I do not have a " + guess)
	// }

	// console.log(guess.value)
	//  		// Update the game state with the guess
	//  	for (var j = 0; j < word.length; j++) {
	//  		if (word[j] === guess) {
	//  			answer[j] = guess;
	//  		}
	//  	}
	// }	







