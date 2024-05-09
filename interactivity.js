function getComputerChoice(){
    const computerChoices = ["rock", "paper", "scissor"];
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

function getHumanChoice(){
    const humanChoice = prompt("input rock, paper or scissor: ").toLowerCase();
    return humanChoice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
   if(humanChoice === computerChoice) {
    console.log("It's a tie");
   }
   else if(
    (humanChoice === 'rock' & computerChoice === 'paper') || 
    (humanChoice === 'paper' & computerChoice === 'scissor') ||
    (humanChoice === 'scissor' & computerChoice === 'rock')
   ) {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
   } else if(
    (humanChoice === 'rock' & computerChoice === 'scissor') || 
    (humanChoice === 'paper' & computerChoice === 'rock') ||
    (humanChoice === 'scissor' & computerChoice === 'paper')
   ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    console.log(`HumanScore: ${humanScore}, ComputerScore: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();