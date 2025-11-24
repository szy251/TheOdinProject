function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);

	switch (choice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
		default:
			return "rock";
	}
}

function playRound(humanChoice, computerChoice) {
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
				resultText = "You win! Rock beats scissors";
				humanScore += 1;
			}
			break;
		case "paper":
			if (computerChoice === "scissors") {
				resultText = "You lose! Scissors beats paper";
				computerScore += 1;
			} else {
				resultText = "You win! Paper beats rock";
				humanScore += 1;
			}
			break;
		case "scissors":
			if (computerChoice === "rock") {
				resultText = "You lose! Rock beats scissors";
				computerScore += 1;
			} else {
				resultText = "You win! Scissors beats paper";
				humanScore += 1;
			}
			break;
		default:
			break;
	}
	resultUI.textContent = resultText;
}

let humanScore = 0;
let computerScore = 0;
let end = false;

const resultUI = document.querySelector("#round_score");
const choicesBtn = document.querySelectorAll(".choice");
const humanUi = document.querySelector("#p_score");
const computerUi = document.querySelector("#c_score");
const finalScore = document.querySelector("#final_score");
const resetBtn = document.querySelector("#reset");

choicesBtn.forEach((button) => {
	button.addEventListener("click", () => {
		if (!end) {
			let computerChoice = getComputerChoice();
			let humanChoice = button.textContent.toLocaleLowerCase();
			playRound(humanChoice, computerChoice);
			humanUi.textContent = humanScore;
			computerUi.textContent = computerScore;

			if (humanScore == 5) {
				finalScore.textContent = "Player won the game!!!";
				end = true;
			}
			if (computerScore == 5) {
				finalScore.textContent = "Computer won the game!!!";
				end = true;
			}
		}
	});
});

resetBtn.addEventListener("click", () => {
	humanScore = 0;
	computerScore = 0;
	end = false;
	humanUi.textContent = 0;
	computerUi.textContent = 0;
	resultUI.textContent = "";
	finalScore.textContent = "";
});
