function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);

	switch (choice) {
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

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		console.log("Remis! Both have " + humanChoice);
		return;
	}

	switch (humanChoice) {
		case "rock":
			if (computerChoice === "paper") {
				console.log("You lose! Paper beats rock");
				computerScore += 1;
			} else {
				console.log("You win! Rock beats scisors");
				humanScore += 1;
			}
			return;
		case "paper":
			if (computerChoice === "scisors") {
				console.log("You lose! Scisors beats paper");
				computerScore += 1;
			} else {
				console.log("You win! Paper beats rock");
				humanScore += 1;
			}
			return;
		case "scisors":
			if (computerChoice === "rock") {
				console.log("You lose! Rock beats scisors");
				computerScore += 1;
			} else {
				console.log("You win! Scisors beats paper");
				humanScore += 1;
			}
			return;
		default:
			return;
	}
}

let humanScore = 0;
let computerScore = 0;
