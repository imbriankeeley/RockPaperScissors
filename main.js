

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
        alert("You Lose! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock"){
        alert("It's a Tie!");
    }
};

playRound(playerSelection, computerSelection)