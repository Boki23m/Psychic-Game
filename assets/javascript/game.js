// Letter choices available 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// creating variables to hold the number of wins, losses and setting them all to zero 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userChoice = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userChoiceText = document.getElementById("userchoice-text");
var guessesLeftText = document.getElementById("guessesleft-text");


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    let userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
        console.log(wins);
        winsText.textContent = "Wins: " + wins;
    } else {
        guessesLeft--;
        console.log(guessesLeft);
    }

    // Display the user and computer guesses, and wins/losses/ties.
    
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    userChoiceText.textContent = "Your Guesses so far: " + userGuess;
}

