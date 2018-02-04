var blankAnswer = document.getElementById('blankAnswer');
var submit = document.getElementById('try');
var guess = document.getElementById('playerGuess');
var letterGuessed = document.getElementById('letterGuessed');
var hint = document.getElementById('hint');
var reset = document.getElementById('reset');
var livesLeft = document.getElementById('displayLives');
var words = ["cat", "bird", "horse", "phone", "candle", "stamp", "wonder", "hockey", "thursday", "wednesday", "fruit", "banama"]
var answer = words[Math.floor(Math.random() * words.length)];
console.log(answer);
var finalAnswer = answer.split('')
var letterGuess = [];
var numberWrongGuesses = [];
var numberRightGuesses = [];


var lives = 5;
livesLeft.innerHTML = lives + " lives left";

var hints = ['Meow', 'Chirp', 'Nay', 'Dial me', 'In the wind', 'Sits in the corner and travels the world', " The Oneders!", "Stanley Cup", "Friday junior", "Little Saturday", "and vegetables", "Curious George's favorite food"]

// Where the answer will be displayed as blank spaces
var blanks = [];
for (i=0; i < answer.length; i++){
	blanks[i] = " _ ";
}

console.log(blanks)
// Display the blank spaces on the screen, .join removes the commas
blankAnswer.innerHTML = blanks.join(' ');
letterGuessed.innerHTML = "Letters Guessed: ";

// click submit to guess a letter after typing one in
submit.addEventListener('click', function(){
	var guess = document.getElementById('playerGuess').value;
	letterGuess.push(guess);
	letterGuessed.innerHTML = "Letters Guessed: " + letterGuess;
	var bool = false;
	for (i=0; i <= finalAnswer.length; i++) {
		if (guess === finalAnswer[i]){
			console.log("this is correct")
			blanks[i] = guess
			blankAnswer.innerHTML = blanks.join(' ');
			numberRightGuesses.push(guess)
			bool = true;
			if (numberRightGuesses.length === finalAnswer.length){
				setTimeout(function() {alert('DILLY DILLY!');});
						window.location.reload()
			}
		}
	}

	if(!bool){
		for (j=0; j <= finalAnswer.length; j++) {
			if( guess != finalAnswer[i]){
				if (numberWrongGuesses.length == 4){
					setTimeout(function(){alert('OFF TO THE PIT OF MISERY!')})
					window.location.reload();
				} lives--;
			  	livesLeft.innerHTML = lives + " lives left";
			  	numberWrongGuesses.push(guess);
			  	console.log('this is incorrect')
			  	return	
			}	
		}
	}	
})

hint.addEventListener('click', function(){
	var hintIndex = words.indexOf(answer);
    displayHint.innerHTML = "Clue: " +  hints[hintIndex];
})

reset.addEventListener('click', function(){
    location.reload();
})









