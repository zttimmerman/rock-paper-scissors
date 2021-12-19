function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)]
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    const rock = /rock/i;
    const paper = /paper/i;
    const scissors = /scissors/i;

    if ((playerSelection.match(rock)) && (computerSelection == "Scissors")) {
        playerScore++;
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection.match(rock) && (computerSelection == "Paper")) {
        computerScore++;
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection.match(rock) && (computerSelection == "Rock")) {
        console.log("Tie!");
    } else if (playerSelection.match(paper) && (computerSelection == "Scissors")) {
        computerScore++;
        console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection.match(paper) && (computerSelection == "Paper")) {
        console.log("Tie!");
    } else if (playerSelection.match(paper) && (computerSelection == "Rock")) {
        playerScore++;
        console.log("You Win! Paper beats Rock");
    } else if (playerSelection.match(scissors) && (computerSelection == "Scissors")) {
        console.log("Tie!");
    } else if (playerSelection.match(scissors) && computerSelection == "Paper") {
        playerScore++;
        console.log("You You Win! Scissors beats Paper");
    } else if (playerSelection.match(scissors) && computerSelection == "Rock") {
        computerScore++;
        console.log("You Lose! Rock beats Scissors");
    } else {
        console.log("Invalid entry. Please enter Rock, Paper, or Scissors.");
    }
}

function game() {
    let playerChoice;
    for (i = 0; i < 5; i++) {
        playerChoice = prompt("Rock, Paper, or Scissors?");
        playRound(playerChoice, computerPlay());
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You won!")
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lost!")
    } else if (playerScore === computerScore) {
        console.log("Tie!")
    }
}