// Letter choices available 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// creating variables to hold the number of wins, losses and setting them all to zero 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userChoice = [''];
var computerGuess = [''];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userChoiceText = document.getElementById("userchoice-text");
var guessesLeftText = document.getElementById("guessesleft-text");

// Call the function to initiate the Game
playGame();

function playGame() {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess); // for test only

    // Reset the variables
    var guessesLeft = 9;
    var userChoice = [''];

    // Call the function to check for match
    checkLetter();

    function checkLetter() {
        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {

            // Determines which key was pressed.
            var userGuess = event.key;

            if (userGuess === computerGuess) {
                wins++;
                winsText.textContent = "Wins: " + wins;
                resetGame();
            }
            else {
                guessesLeft--;
                guessesLeftText.textContent = "Guesses left: " + guessesLeft;
                userChoice = userChoice + (userGuess + ", ");
                userChoiceText.textContent = "Your Guesses so far: " + userChoice;
                noGuessesLeft();
            }
        }
    }

    // This function resets the game and starts the game from the beginning
    function resetGame() {
        var guessesLeft = 9;
        var userChoice = [''];
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        userChoiceText.textContent = "Your Guesses so far: " + userChoice;
        playGame();
    }

    // This function checks if there is any guesses left
    function noGuessesLeft() {
        if (guessesLeft === 0) {
            losses++;
            lossesText.textContent = "Losses: " + losses;
            resetGame();
        }
        else {
            checkLetter();
        }
    }
}