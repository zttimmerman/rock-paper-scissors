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
        results.textContent = "Round won! Rock beats Scissors";
        displayScore();
    } else if (playerSelection === "rock" && computerSelection == "paper") {
        computerScore++;
        results.textContent = "Round lost! Paper beats Rock";
        displayScore();
    } else if (playerSelection === "rock" && computerSelection == "rock") {
        results.textContent = "Tie!";
        displayScore();
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        computerScore++;
        results.textContent = "Round lost! Scissors beats Paper"
        displayScore();
    } else if (playerSelection === "paper" && computerSelection == "paper") {
        results.textContent = "Tie!";
        displayScore();
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        playerScore++;
        results.textContent = "Round won! Paper beats Rock"
        displayScore();
    } else if (playerSelection === "scissors" && computerSelection == "scissors") {
        results.textContent = "Tie!";
        displayScore();
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        playerScore++;
        results.textContent = "Round won! Scissors beats Paper";
        displayScore();
    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        computerScore++;
        results.textContent = "Round lost! Rock beats Scissors";
        displayScore();
    } else {
        results.textContent = "ERROR"
    }

    checkWinner();
}

function checkWinner() {
    const para = document.createElement("p");
    if (playerScore === 5) {
        para.textContent = "Congratulations, you won the game!";
        para.style.cssText = "color: green; font-weight: 700; font-size: 1.1em;"
        results.appendChild(para);
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        para.textContent = "Sorry, you lost the game!";
        para.style.cssText = "color: red; font-weight: 700; font-size: 1.1rem;"
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
    score.style.cssText = "font-weight: 700; padding: 1.1rem"
    results.appendChild(score);
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors")

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);