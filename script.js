var blankAnswer = document.getElementById('blankAnswer');
var submit = document.getElementById('try');
var guess = document.getElementById('playerGuess');
var letterGuessed = document.getElementById('letterGuessed');
var hint = document.getElementById('hint');
var reset = document.getElementById('reset');
// var hintIndex = indexOf(answer);
var words = ["cat", "bird", "horse", "banana"]
var answer = words[Math.floor(Math.random() * words.length)];
console.log(answer);
var finalAnswer = answer.split('')
var letterGuess = [];


var hints = ['meow', 'chirp', 'nay', 'monkey food']

// Where the answer will be displayed as blank spaces
var blanks = [];
for (i=0; i < answer.length; i++){
	blanks[i] = " _ ";
}
console.log(blanks)
// Display the blank spaces on the screen, .join removes the commas
blankAnswer.innerHTML = blanks.join(' ');

// click submit to guess a letter after typing one in
submit.addEventListener('click', function(){
	var guess = document.getElementById('playerGuess').value;
	var bool = false;
	for (i=0; i <= finalAnswer.length; i++) {
		if (guess === finalAnswer[i]){
			console.log("this is correct")
			blanks[i] = guess
			blankAnswer.innerHTML = blanks.join(' ');
			letterGuess.push(guess)
			numberRightGuesses.push(guess)
			letterGuessed.innerHTML = letterGuess;
			bool = true;
		}
	}

	if(!bool){
	for (j=0; j <= finalAnswer.length; j++) {
		if( guess != finalAnswer[i]){
			console.log('this is incorrect')
			letterGuess.push(guess)
			numberWrongGuesses.push(guess)
			letterGuessed.innerHTML = letterGuess;
			return
			}
		}
	}	
})


var numberWrongGuesses = [];

function wrongGuessFunction(){
	if(numberWrongGuesses > 3) {
		alert("Game Over")
	}
}	
var numberRightGuesses = [];	
function rightGuessFunction(){
	if(numberRightGuesses.length = 3) {
		alert("Game Over")
	}
}	



hint.addEventListener('click', function(){
	var hintIndex = words.indexOf(answer);
    displayHint.innerHTML = "Clue: " +  hints[hintIndex];
})

reset.addEventListener('click', function(){
    location.reload();
})







