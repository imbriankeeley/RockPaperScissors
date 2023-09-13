let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors"){
        alert("You win! Rock beats Scissors");
        playerScore ++
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper"){
        alert("You lose! Paper beats Rock");
        computerScore ++
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock"){
        alert("It's a Tie!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
        alert ("You win! Paper beats Rock");
        playerScore ++
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors"){
        alert("You lose! Scissors beats Paper");
        computerScore ++
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper"){
        alert("It's a Tie!");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
        alert("You win! Scissors beats Paper");
        playerScore ++
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock"){
        alert("You lose! Rock beats Scissors");
        computerScore ++
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors"){
        alert("It's a Tie!");
    }
    return playerScore
    return computerScore
};

function gameResult(){
    if (playerScore === computerScore){
        alert("You tied!");
    } else if (playerScore > computerScore){
        alert("You won!");
    } else if (playerScore < computerScore){
        alert("You lost!");
    }
};


function game(){
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt("Pick rock, paper, or scissors");
        let computerSelection = getComputerChoice();

        function getComputerChoice(){
            let decision = ["Rock", "Paper", "Scissors"];
            return (decision[(Math.floor(Math.random() * decision.length))]);
    };
    
        playRound(playerSelection, computerSelection);

    };

    gameResult()

};

game()