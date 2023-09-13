
//Player Scores
let playerScore = 0
let computerScore = 0


//Game Round
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        alert("It's a Tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        alert("You win! Rock beats Scissors");
        playerScore ++;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        alert("You lose! Paper beats Rock");
        computerScore ++;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        alert ("You win! Paper beats Rock");
        playerScore ++;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        alert("You lose! Scissors beats Paper");
        computerScore ++;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        alert("You win! Scissors beats Paper");
        playerScore ++
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        alert("You lose! Rock beats Scissors");
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