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
	var availableLetters = "qwertyuiopasdfghjklzxcvbnm";
	// links the guess to what is typed in the box
	var guess = document.getElementById('playerGuess').value;
		for (i=0; i <= word.length; i++){
		if (guess == word[i]){
			alert("There is a " + word[i]);
			break;
		} else if (guess.length !== 1) {
			alert("Player can only guess one letter at a time!");
			break;
		} else {
			alert("There are no " + guess + "'s guess again")
			break;
		}
	}
})







