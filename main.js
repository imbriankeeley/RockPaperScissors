//Variables
let playerScore = 0
let computerScore = 0

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const scores = document.querySelector('#results');
const playersScoreContainer = document.createElement('div');
const playersScore = document.createElement('h1');

playersScore.classList.add('player-score');
playersScore.textContent = `Player: ${playerScore}`
playersScoreContainer.appendChild(playersScore);
scores.appendChild(playersScoreContainer);

const computersScoreContainer = document.createElement('div');
const computersScore = document.createElement('h1');

computersScore.classList.add('computer-score');
computersScore.textContent = `Computer: ${computerScore}`
computersScoreContainer.appendChild(computersScore);
scores.appendChild(computersScoreContainer);


//Generate Random Pick For Computer
function getComputerChoice(){
    let decision = ["rock", "paper", "scissors"];
    return (decision[(Math.floor(Math.random() * decision.length))]);
};

//Game Round
function playRound(playerSelection, computerSelection){
    const status = document.querySelector('.status');

    if (playerSelection === computerSelection){ 

        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = 'Bummer, it\'s a tie'
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        
        playerScore ++;
        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = 'You won this round!'

    } else if ((playerSelection === "rock" && computerSelection === "paper") ||(playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")){
        
        computerScore ++;
        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = 'You lost this round :('

    }

    return playerScore
    return computerScore

    
};

//Game Result
function gameResult(){
    const status = document.querySelector('.status');


    if (playerScore === 5){
        playersScore.textContent = `You `
        computersScore.textContent = `Win!`
        status.textContent = 'Congratulations! Play again?'

    } else if(computerScore === 5){
        playersScore.textContent = `You `
        computersScore.textContent = `Lose!`
        status.textContent = 'Play again?'
        
    }
};

function game(){

//Play Round On Click
    rock.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        getComputerChoice()
        playRound('rock', computerSelection);
        gameResult()
    });
    paper.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        getComputerChoice()
        playRound('paper', computerSelection);
        gameResult()
    });
    scissors.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        getComputerChoice()
        playRound('scissors', computerSelection);
        gameResult()
    });

}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    const status = document.querySelector('.status');

    let playerScore = 0;
    let computerScore = 0;
    playersScore.textContent = `Player: ${playerScore}`
    computersScore.textContent = `Computer: ${computerScore}`
    status.textContent = 'Chose your hand'

});

game()




