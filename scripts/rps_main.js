


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