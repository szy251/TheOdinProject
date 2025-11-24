const BOARD_SIZE = 800;
let currColor = "rgba(81, 215, 19, 1)";

const board = document.querySelector(".board");
const sizeBtn = document.querySelector(".size");

board.addEventListener("mouseover", (event) => {
	const currentBlock = event.target;

	if (currentBlock.classList.contains("block")) {
		currentBlock.style.backgroundColor = currColor;
	}
});

sizeBtn.addEventListener("click", () => {
	let size = prompt("Change number of blocks per side (max 100):");
	if (size === null) return;
	size = Number.parseInt(size);

	if (isNaN(size) || size > 100 || size < 1) {
		alert("Incorrect data");
	} else {
		clearBoard();
		drawBoard(size, size);
	}
});

function clearBoard() {
	while (board.firstChild) {
		board.removeChild(board.firstChild);
	}
}

function drawBoard(lanes, blocks) {
	for (let i = 0; i < lanes; i++) {
		const lane = document.createElement("div");
		lane.classList.toggle("lane");
		for (let j = 0; j < blocks; j++) {
			const block = document.createElement("div");
			block.classList.toggle("block");
			lane.appendChild(block);
		}
		board.appendChild(lane);
	}
}

drawBoard(13, 13);
