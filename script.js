var blankAnswer = document.getElementById('blankAnswer');
var submit = document.getElementById('try');
var guess = document.getElementById('playerGuess');
var letterGuessed = document.getElementById('letterGuessed');
var hint = document.getElementById('hint');
var reset = document.getElementById('reset');

// var hintIndex = indexOf(answer);
var words = ["cat", "bird", "horse", "phone", "candle", "stamp", "wonder", "hockey", "thursday", "friday", "fruit"]
var answer = words[Math.floor(Math.random() * words.length)];
console.log(answer);
var finalAnswer = answer.split('')
var letterGuess = [];
var numberWrongGuesses = [];
var numberRightGuesses = [];


var hints = ['Meow', 'Chirp', 'Nay', 'Dial me', 'In the wind', 'Sits in the corner and travels the world', " The Oneders!", "Stanley Cup", "Friday junior", "Little Saturday", "and vegetables"]

// Where the answer will be displayed as blank spaces
var blanks = [];
for (i=0; i < answer.length; i++){
	blanks[i] = " _ ";
}
console.log(blanks)
// Display the blank spaces on the screen, .join removes the commas
blankAnswer.innerHTML = blanks.join(' ');


var lives =document.getElementById('displayLives');
var lives = 3;
displayLives.innerHTML = "You have " + lives + " more gusses";

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

	if(numberRightGuesses.length === finalAnswer.length) {
		displayLives.innerHTML = "You Win!";
	}

	if(numberWrongGuesses.length > lives) {
		displayLives.innerHTML = "You Lose!";
	}
	console.log(lives)
})

hint.addEventListener('click', function(){
	var hintIndex = words.indexOf(answer);
    displayHint.innerHTML = "Clue: " +  hints[hintIndex];
})

reset.addEventListener('click', function(){
    location.reload();
})









