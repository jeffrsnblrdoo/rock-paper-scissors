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

function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors?");
  choice = choice.toLowerCase();
  return choice;
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock!");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper!");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors!");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors!");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock!");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper!");
      humanScore++;
    } else {
      console.log("Draw!");
    }
  }

  playRound(humanChoice, computerChoice);
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

playGame();
