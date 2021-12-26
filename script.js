function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*3)]
}

let playerScore = 0;
let computerScore = 0;

function playRound(e) {
    let computerSelection = computerPlay();
    let playerSelection = e.target.id;
    let results = document.querySelector("#results");

    if (playerSelection === "rock" && computerSelection == "scissors") {
        playerScore++;
        results.textContent = "You Win! Rock beats Scissors";
        displayScore();
    } else if (playerSelection === "rock" && computerSelection == "paper") {
        computerScore++;
        results.textContent = "You Lose! Paper beats Rock";
        displayScore();
    } else if (playerSelection === "rock" && computerSelection == "rock") {
        results.textContent = "Tie!";
        displayScore();
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        computerScore++;
        results.textContent = "You Lose! Scissors beats Paper"
        displayScore();
    } else if (playerSelection === "paper" && computerSelection == "paper") {
        results.textContent = "Tie!";
        displayScore();
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        playerScore++;
        results.textContent = "You Win! Paper beats Rock"
        displayScore();
    } else if (playerSelection === "scissors" && computerSelection == "scissors") {
        results.textContent = "Tie!";
        displayScore();
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        playerScore++;
        results.textContent = "You You Win! Scissors beats Paper";
        displayScore();
    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        computerScore++;
        results.textContent = "You Lose! Rock beats Scissors";
        displayScore();
    } else {
        results.textContent = "ERROR"
    }

    checkWinner();
}

function checkWinner() {
    const para = document.createElement("p");
    if (playerScore === 5) {
        para.textContent = "Congratulations, you won!";
        results.appendChild(para);
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        para.textContent = "Sorry, you lost!";
        results.appendChild(para);
        playerScore = 0;
        computerScore = 0;
    } else {
        return;
    }
}

function displayScore() {
    const score = document.createElement("p");
    score.textContent = `Your Score: ${playerScore} Computer Score: ${computerScore}`;
    results.appendChild(score);
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors")

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

/* function game() {
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
} */