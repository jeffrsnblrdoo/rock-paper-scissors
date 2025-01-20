let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getPlayerChoice = (e) => {
    humanChoice = e.target.textContent;
    playRound(humanChoice, getComputerChoice());
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", getPlayerChoice));

const result = document.querySelector("#result");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose! Paper beats Rock!";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose! Scissors beats Paper!";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win! Rock beats Scissors!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win! Paper beats Rock!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win! Scissors beats Paper!";
        humanScore++;
    } else {
        result.textContent = "Draw!";
    }
}
