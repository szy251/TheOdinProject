function getComputerChoice(){
    let choice = Math.floor(Math.random() *3);

    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scisors';
        default:
            return 'rock';
    }
}

function getHumanChoice(){
    return prompt('Chose between rook, paper, scisors').toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log('Remis! Both have ' + humanChoice);
        return;
    }

    switch(humanChoice){
        case 'rock':
            if(computerChoice === 'paper'){
                console.log('You lose! Paper beats rock');
                computerScore +=1;
            } else{
                console.log('You win! Rock beats scisors');
                humanScore +=1;
            }
            return;
        case 'paper':
            if(computerChoice === 'scisors'){
                console.log('You lose! Scisors beats paper');
                computerScore +=1;
            } else{
                console.log('You win! Paper beats rock');
                humanScore +=1;
            }
            return;
        case 'scisors':
            if(computerChoice === 'rock'){
                console.log('You lose! Rock beats scisors');
                computerScore +=1;
            } else{
                console.log('You win! Scisors beats paper');
                humanScore +=1;
            }
            return;
        default:
            return;
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    for(i = 1; i <= 5; i++){
        console.log('Roound number' + i);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore){
        console.log('You won game! Your score was ' + humanScore + '. Computer scroe was ' + computerScore +'.');
    } else if(humanScore < computerScore){
        console.log('You lost game! Your score was ' + humanScore + '. Computer scroe was ' + computerScore +'.');
    } else{
        console.log('Remis! Your and computer score was ' + humanScore + '.');
    }
}
let humanScore = 0;
let computerScore = 0;


playGame()