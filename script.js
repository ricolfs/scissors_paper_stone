//functions needed 
/* 1. getComputerChoice = randomly return rock paper or scissor
2. playRound = takes two parameters playerSelection and computerSelection and returns a string that declares the winner of the round
3. Make playerSelection case insensitive so that can inpur anything
4. game()= use previous function inside this one to play 5 round game that keeps score and reports a winner or loser at the endßßßßßßßßßßßßßßßß
use return() to display the results of each round and the winner at the end
use prompt() to get input from the user
*/

//Purpose: Randomly return rock paper or scissors
//Parameters: None
//Output: Either Rock paper or scissors
//Algorithm: 1. establish rock, scissors and paper variables as numbers between 1 and 3 inclusive
        //   2. Use math.random() function and math.floor function to output a random number between 1 and 3 that represents rock, paper or scissors
function getComputerChoice () {
    let random = (Math.floor(Math.random() * (3)) + 1); 
    return random;
    }
    //WORKING   


//Name: playRound
//Parameters: playerSelection, computerSelection
//Output: String that declares the winner of the round
//Challenge: Make case insensitive so that any playerSelection can be recognised

function playRound (playerSelection,computerSelection) {
    let playerValue = playerSelection.toLowerCase();
    let cwin = "Computer wins!";
    let pwin = "Player wins!";
    let tie = "Tie!"
    if (playerValue === "rock" && computerSelection==1){
        return tie
    }
    else if (playerValue=="rock" && computerSelection==2){
        return(cwin)
    }
    else if (playerValue=="rock" && computerSelection==3){
        return(pwin)
    }
    else if (playerValue=="paper" && computerSelection==2){
        return(tie)
    }
    else if (playerValue=="paper" && computerSelection==1){
        return(pwin)
    }
    else if (playerValue=="paper" && computerSelection==3){
        return(cwin)
    }
    else if (playerValue=="scissor" && computerSelection==3){
        return(tie)
    }
    else if (playerValue=="scissor" && computerSelection==1){
        return(cwin)
    }
    else if (playerValue=="scissor" && computerSelection==2){
        return(pwin)
    }

}
///working

 function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i=0;i<5;i++) {
    let playerSelection = prompt("Do you choose rock, paper or scissors?");
    let result = playRound (playerSelection, getComputerChoice());
    // console.log(result)
    console.log(`Player score is ${playerScore}`)
    //    if (result==`Player Wins!`) {
    //     playerScore++;
    //     console.log(`Player score is ${playerScore}`)
    //    }
    //    else if(result==`Computer Wins!`) {
    //     computerScore++;
    //     console.log(`Computer Score is ${computerScore}`)
    //    }
    // }
    // if (playerScore>computerScore) {
    //     return ("Player won the game!");
    // }
    // else {return ("Computer won the game!");}
    }
}

 game();