
//Player Scores
let playerScore = 0
let computerScore = 0


//Game Round
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        alert("It's a Tie!");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        alert("You win! Rock beats Scissors");
        playerScore ++;
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||(playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")){
        alert("You lose! Paper beats Rock");
        computerScore ++;
    }
    return playerScore
    return computerScore
};

//Game Result
function gameResult(){
    if (playerScore === computerScore){
        alert("You tied!");
    } else if (playerScore > computerScore){
        alert("You won!");
    } else if (playerScore < computerScore){
        alert("You lost!");
    }
};

//Game
function game(){
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt("Pick rock, paper, or scissors").toLowerCase();
        let computerSelection = getComputerChoice();

        function getComputerChoice(){
            let decision = ["rock", "paper", "scissors"];
            return (decision[(Math.floor(Math.random() * decision.length))]);
    };
    
        playRound(playerSelection, computerSelection);

    };

    gameResult()

};

game()