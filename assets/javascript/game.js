//variables declared
//variable of letters available
var alphabet="abcdefghijklmnopqrstuvwxyz".split("");
var wins;
var losses;
var guessesLeft;
var lettersGuessed=[];

window.onload=function setScreen() {
//establish number of wins so far and innerHTML to proper <div>
	wins = 0;
	document.getElementById("noOfWins").innerHTML=wins;
//establish guesses remaining and innerHTML to proper <div>
	guessesLeft= 9;
	document.getElementById("noRemaining").innerHTML=guessesLeft;
//establish number of losses so far and inner HTML to proper <div>
	losses= 0;
	document.getElementById("noOfLosses").innerHTML=losses;
}

//variable to store computer input
var computerGuess=alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);
	

//when user releases a key
document.onkeyup=function(event) {
//variable to store user input
	var userGuess=event.key;
	console.log(userGuess);


	if (userGuess === computerGuess) {
//wins increase by 1
		wins=wins+1;
		document.getElementById("noOfWins").innerHTML=wins;
//alert the user
		alert("You guessed correctly!");
//re-establish guesses remaining and innerHTML to proper <div>
		guessesLeft= 9;
		document.getElementById("noRemaining").innerHTML=guessesLeft;
//clear the letters array
		lettersGuessed=[];
		document.getElementById("letterArray").innerHTML=lettersGuessed;
//make computer get new letter
		computerGuess=alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(computerGuess);

	}

	else if (userGuess !== computerGuess) {
//regardless, number of guesses goes down
		guessesLeft= guessesLeft-1;
		document.getElementById("noRemaining").innerHTML=guessesLeft;
//when wrong letter is guessed, letter is pushed to array and displayed
		lettersGuessed.push(" " + userGuess);
		document.getElementById("letterArray").innerHTML=lettersGuessed;


//when user runs out of guesses
		if (guessesLeft === 0) {
//alert the user
			alert("Try again!");
//losses increase by one
			losses = losses+1;
			document.getElementById("noOfLosses").innerHTML=losses;
//re-establish guesses remaining and innerHTML to proper <div>
			guessesLeft= 9;
			document.getElementById("noRemaining").innerHTML=guessesLeft;
//clear the letters array
			lettersGuessed=[];
			document.getElementById("letterArray").innerHTML=lettersGuessed;
//make computer get new letter
			computerGuess=alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log(computerGuess);
		}


	}



}


