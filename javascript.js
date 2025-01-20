let humanScore = 0;
let computerScore = 0;
let rounds = 5;
let humanChoice = "";

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

const result = document.querySelector("#result");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
        humanChoice = e.target.textContent;

        if (rounds != 0) {
            playRound(humanChoice, getComputerChoice());
            console.log(rounds);
            rounds--;
        } else {
            if (computerScore > humanScore) {
                result.textContent = `You lose! Computer score is ${computerScore} and your score is ${humanScore}!`;
            } else if (computerScore < humanScore) {
                result.textContent = `You win! Your score is ${humanScore} and computer score is ${computerScore}!`;
            } else {
                result.textContent = `Draw! Your score is ${humanScore} and computer score is ${computerScore}!`;
            }
        }
    })
);

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
