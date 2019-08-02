const letter = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables
let wins = 0;
let losses = 0;
let guesses = 10;
let keyPressAr = [];

// variables for ids in html
let winsText = document.getElementById('winsText');
let lossesText = document.getElementById('lossesText');
let guessesText = document.getElementById('guessesText');
let userGuessesText = document.getElementById('userGuessText');

    
// random guess
randomGuess = letter[Math.floor(Math.random() * letter.length)];


// ====== logic =========

//Getting input from user
document.onkeypress = function(event) {
var userGuess = event.key;

//registering win
if(userGuess === randomGuess){
    wins++;
    keyPressAr = []
    guesses = 10;
}

//registering loss
if (userGuess !== randomGuess) {
    guesses--;
}

// To make user guess runs out and reset
if(guesses === 0){
    losses++;
    keyPressAr = []
    guesses = 10;
}

//To display user keypress array 
if (keyPressAr.indexOf(userGuess) >= 0) {
    
} else {
      keyPressAr.push(userGuess);
      let userArr = document.querySelector('#userGuessText');
      userArr.textContent = keyPressAr;
}


//HTML output
winsText.innerHTML = "Wins: " + wins;
lossesText.innerHTML = "Losses: " + losses;
guessesText.innerHTML = "Guesses left: " + guesses;
userGuessesText.innerHTML = "Your guesses so far: " + keyPressAr;
}