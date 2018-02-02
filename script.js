var blankAnswer = document.getElementById('blankAnswer');
var submit = document.getElementById('try');
var guess = document.getElementById('playerGuess');
var letterGuessed = document.getElementById('letterGuessed');
var words = ["cat", "bird", "horse", "banana"]
var letterGuess = [];
var answer = words[Math.floor(Math.random() * words.length)];
console.log(answer);

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
	for (i=0; i <= answer.length; i++) {
		if (guess == answer[i]){
			console.log("this is correct")
			blanks[i] = guess
			blankAnswer.innerHTML = blanks.join(' ');
			letterGuess.push(guess)
			letterGuessed.innerHTML = letterGuess;
			return
		}
	}

	for (j=0; j <= answer.length; j++) {
		if( guess !== answer[i]){
			console.log('this is incorrect')
			letterGuess.push(guess)
			letterGuessed.innerHTML = letterGuess;
			return
		}
	}
})
	

	







