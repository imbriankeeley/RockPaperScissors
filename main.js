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

function game(){
//Generate Random Pick For Computer
function getComputerChoice(){
    let decision = ["rock", "paper", "scissors"];
    return (decision[(Math.floor(Math.random() * decision.length))]);
};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//Play Round On Click
for(let i = 0; i < 5; i++){
    rock.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        getComputerChoice()
        playRound('rock', computerSelection);
    });
    paper.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        getComputerChoice()
        playRound('paper', computerSelection);
    });
    scissors.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        getComputerChoice()
        playRound('scissors', computerSelection);
    });
}




}

game()




