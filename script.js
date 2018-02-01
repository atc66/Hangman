var blankAnswer = document.getElementById('blankAnswer');

// Our Possible Answers
var words = ["cat", "dog", "bird", "turtle", "iguana", "lizard", "fish", "horse", "mouse", "gerbil", "hamster"]

// Randomly Generate a word to guess
var randomAnswer = words[Math.floor(Math.random() * words.length)];
console.log(randomAnswer);

// Where the answer will be displayed as blank spaces
var answer = [];
// for loop to generate the amount of spaces needed for the answer to be displayed
for (i=0; i < randomAnswer.length; i++){
	answer[i] = " _ ";
}
// shows the underscores representing the right letter
console.log(answer)

// Display the blank spaces on the screen
blankAnswer.innerHTML = answer;