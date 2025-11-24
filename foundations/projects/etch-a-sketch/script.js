const BOARD_SIZE = 800;
const STARTING_SIZE = 16;
let currColor = "rgba(81, 215, 19, 1)";
let isDrawing = false;

document.body.onmousedown = () => (isDrawing = true);
document.body.onmouseup = () => (isDrawing = false);

const board = document.querySelector(".board");
const sizeBtn = document.querySelector(".size");
const resetBtn = document.querySelector(".reset");

function paintBlock(event) {
	event.preventDefault();

	if (event.type === "mouseover" && !isDrawing) return;

	if (event.target.classList.contains("block")) {
		event.target.style.backgroundColor = currColor;
	}
}

board.addEventListener("mouseover", paintBlock);
board.addEventListener("mousedown", paintBlock);

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

resetBtn.addEventListener("click", () => {
	const blocks = document.querySelectorAll(".block");
	blocks.forEach((block) => {
		block.style.backgroundColor = "white";
	});
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

drawBoard(STARTING_SIZE, STARTING_SIZE);
