function getComputerChoice(){
    let choice = Math.floor(Math.random() *3);

    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scisors";
        default:
            return "rock";
    }
}

function getHumanChoice(){
    return prompt("Chose between rook, paper, scisors").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;