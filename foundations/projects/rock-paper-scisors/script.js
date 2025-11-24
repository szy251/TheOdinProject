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
	const resultUI = document.querySelector("div");
	let resultText;
	if (humanChoice == computerChoice) {
		resultUI.textContent = "Remis! Both have " + humanChoice;
		return;
	}

	switch (humanChoice) {
		case "rock":
			if (computerChoice === "paper") {
				resultText = "You lose! Paper beats rock";
				computerScore += 1;
			} else {
				resultText = "You win! Rock beats scisors";
				humanScore += 1;
			}
			break;
		case "paper":
			if (computerChoice === "scisors") {
				resultText = "You lose! Scisors beats paper";
				computerScore += 1;
			} else {
				resultText = "You win! Paper beats rock";
				humanScore += 1;
			}
			break;
		case "scisors":
			if (computerChoice === "rock") {
				resultText = "You lose! Rock beats scisors";
				computerScore += 1;
			} else {
				resultText = "You win! Scisors beats paper";
				humanScore += 1;
			}
			break;
		default:
			return;
	}
	resultUI.textContent = resultText;
}

let humanScore = 0;
let computerScore = 0;

const choicesBtn = document.querySelectorAll("button");

choicesBtn.forEach((button) => {
	button.addEventListener("click", () => {
		let computerChoice = getComputerChoice();
		let humanChoice = button.textContent.toLocaleLowerCase();
		playRound(humanChoice, computerChoice);
	});
});
