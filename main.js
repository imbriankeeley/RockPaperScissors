

const playerSelection = prompt("Pick rock, paper, or scissors");
const computerSelection = getComputerChoice();

function getComputerChoice(){
    const decision = ["Rock", "Paper", "Scissors"];
    return (decision[(Math.floor(Math.random() * decision.length))]);
};

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors"){
        alert("You win! Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper"){
        alert("You lose! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock"){
        alert("It's a Tie!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
        alert ("You win! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors"){
        alert("You lose! Scissors beats Paper");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper"){
        alert("It's a Tie!");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
        alert("You win! Scissors beats Paper");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock"){
        alert("You lose! Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors"){
        alert("It's a Tie!");
    }
};

playRound(playerSelection, computerSelection)