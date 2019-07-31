const letter = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables
let wins = 0;
let losses = 0;
let guesses = 10;


    
    // random guess
    randomGuess = letter[Math.floor(Math.random() * letter.length)];

    function Guess() {
        randomGuess = letter[Math.floor(Math.random() * letter.length)];  
    }

   // logic

   //Getting input from user
   document.onkeypress = function(event) {
    var userGuess = event.key;

    //registering win
    if(userGuess === randomGuess){
        wins++;
        guesses = 10;
    }

    Guess();
    //registering loss
    if (userGuess !== randomGuess) {
        guesses--;
    }

    // To make user guess runs out and reset
    if(guesses === 0){
        losses++;
        guesses = 10;
    }

    //HTML output
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('userGuess').innerHTML = "Your guesses so far: " + userGuess;
}