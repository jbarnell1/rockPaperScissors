


function computerPlay() {
    let choice_num = Math.floor(Math.random()*3) + 1;
    let choice = "rock"
    switch (choice_num) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
        default:
            console.log("The switch statment is not receiving an expected number!")
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const results = document.querySelector('.results') ;
    let round_result = document.createElement('p') ;
    if (playerSelection === computerSelection) {
        
        round_result.textContent = "You Tied! " + playerSelection + " ties with " + computerSelection;
        results.appendChild(round_result) ;
        return 0;
    } else if (playerSelection > computerSelection) {
        // the player has scissors and computer has paper (P wins) or rock (C wins)
        // OR 
        // the player has rock and computer has paper (C wins)
        // the only way for the player to win is if the computer has paper and player has scissors
        if (playerSelection === "scissors" && computerSelection === "paper") {
            round_result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            results.appendChild(round_result) ;
            return 1;
        } else {
            round_result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            results.appendChild(round_result) ;
            return -1;
        }
    } else {
        // the player has paper and the computer has scissors (C wins) or rock (P wins)
        // OR
        // the player has rock and the computer has scissors (P wins)
        // the only way for the computer to win is if the player has paper and computer has scissors
        if (computerSelection === "scissors" && playerSelection === "paper") {
            round_result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            results.appendChild(round_result) ;
            return -1;
        } else {
            round_result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            results.appendChild(round_result) ;
            return 1;
        }
    }
}

function game() {
    const results = document.querySelector('.results') ;
    /*for (let i=0; i < 5; i++) {
        let playerSelection = this.classList[0] ;
        let computerSelection = computerPlay();
        running_total += playRound(playerSelection, computerSelection);
    }*/
    let playerSelection = this.classList[0] ;
    let computerSelection = computerPlay();
    running_total += playRound(playerSelection, computerSelection);
    if (numTimes === 4) {
        let finalResult = document.createElement('h2') ;
        if (running_total > 0) {
            finalResult.textContent = "Great job, you beat the computer!!";
        } else {
            finalResult.textContent = "Better luck next time...";
        }
        results.appendChild(finalResult) ;
        numTimes = 0;
        running_total = 0;
    } else {
        numTimes++;
    }
}

let numTimes = 0 ;
let running_total = 0 ;
const buttons = document.querySelectorAll("button") ;
buttons.forEach(button => button.addEventListener('click', game)) ;