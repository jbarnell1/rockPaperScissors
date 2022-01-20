


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
    if (playerSelection === computerSelection) {
        console.log("You Tied! " + playerSelection + " ties with " + computerSelection);
        return 0;
    } else if (playerSelection > computerSelection) {
        // the player has scissors and computer has paper (P wins) or rock (C wins)
        // OR 
        // the player has rock and computer has paper (C wins)
        // the only way for the player to win is if the computer has paper and player has scissors
        if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            return 1;
        } else {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            return -1;
        }
    } else {
        // the player has paper and the computer has scissors (C wins) or rock (P wins)
        // OR
        // the player has rock and the computer has scissors (P wins)
        // the only way for the computer to win is if the player has paper and computer has scissors
        if (computerSelection === "scissors" && playerSelection === "paper") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            return -1;
        } else {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            return 1;
        }
    }
}

function game() {
    let running_total = 0;
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt("What is your choice? Type 'rock', 'paper', or 'scissors'","rock");
        let computerSelection = computerPlay();
        running_total += playRound(playerSelection, computerSelection);
    }
    if (running_total > 0) {
        alert("Great job, you beat the computer!!");
    } else {
        alert("Better luck next time...");
    }
}