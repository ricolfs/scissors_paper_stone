//functions needed 
/* 1. getComputerChoice = randomly return rock paper or scissor
2. playRound = takes two parameters playerSelection and computerSelection and returns a string that declares the winner of the round
3. Make playerSelection case insensitive so that can inpur anything
4. game()= use previous function inside this one to play 5 round game that keeps score and reports a winner or loser at the end
use console.log() to display the results of each round and the winner at the end
use prompt() to get input from the user
*/

//Purpose: Randomly return rock paper or scissors
//Parameters: None
//Output: Either Rock paper or scissors
//Algorithm: 1. establish rock, scissors and paper variables as numbers between 1 and 3 inclusive
        //   2. Use math.random() function and math.floor function to output a random number between 1 and 3 that represents rock, paper or scissors

const ROCK =1;
const PAPER=2;
const SCISSOR=3;
function getComputerChoice () {
    let random = (Math.floor(Math.random() * (3)) + 1);

    switch(random) {
        case 1:
    }

    }

//Name: playRound
//Parameters: playerSelection, computerSelection
//Output: String that declares the winner of the round

function playRound (playerSelection,computerSelection) {
    
}

