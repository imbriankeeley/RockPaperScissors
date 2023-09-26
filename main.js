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

        let btnclick = new Audio('./audio/tie.mp3')
            btnclick.currentTime = 0
            btnclick.play()

        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = 'Bummer, it\'s a tie'

    } else if (playerSelection === "rock" && computerSelection === "scissors"){

        let btnclick = new Audio('./audio/click.mp3')
            btnclick.currentTime = 0
            btnclick.play()

        playerScore ++;
        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = 'Good job! Rock beats Scissors!!'

    } else if (playerSelection === "paper" && computerSelection === "rock") {

        let btnclick = new Audio('./audio/click.mp3')
            btnclick.currentTime = 0
            btnclick.play()

        playerScore ++;
        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = 'Good job! Paper beats Rock!!'

    } else if (playerSelection === "scissors" && computerSelection === "paper") {

        let btnclick = new Audio('./audio/click.mp3')
            btnclick.currentTime = 0
            btnclick.play()

        playerScore ++;
        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = 'Good job! Scissors beats Paper!!'

    } else if (playerSelection === "paper" && computerSelection === "scissors") {

        let btnclick = new Audio('./audio/click.mp3')
            btnclick.currentTime = 0
            btnclick.play()

        computerScore ++;
        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = ':/ Scissors beats Paper'

    } else if (playerSelection === "scissors" && computerSelection === "rock") {

        let btnclick = new Audio('./audio/click.mp3')
            btnclick.currentTime = 0
            btnclick.play()

        computerScore ++;
        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = ':/ Rock beats Scissors'
        
    } else if (playerSelection === "rock" && computerSelection === "paper"){

        let btnclick = new Audio('./audio/click.mp3')
            btnclick.currentTime = 0
            btnclick.play()

        computerScore ++;
        playersScore.textContent = `Player:  ${playerScore}`
        computersScore.textContent = `Computer: ${computerScore}`
        status.textContent = ':/ Paper beats Rock'

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
        playerScore = 0
        computerScore = 0

        let yay = new Audio('./audio/yay.mp3')
        yay.currentTime = 0
        yay.play()

        return playerScore
        return computerScore


    } else if(computerScore === 5){
        playersScore.textContent = `You `
        computersScore.textContent = `Lose!`
        status.textContent = 'Play again?'
        playerScore = 0
        computerScore = 0

        let aww = new Audio('./audio/aww.mp3')
        aww.currentTime = 0
        aww.play()
        
        return playerScore
        return computerScore
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

//Music Button

const musicButton = document.querySelector('.play-pause');
musicButton.addEventListener('click', () => {
    let music = new Audio('./audio/backgroundmusic.mp3')
        music.currentTime = 0
        music.play()
});


game()




