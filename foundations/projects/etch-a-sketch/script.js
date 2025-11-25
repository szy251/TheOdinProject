const BOARD_SIZE = 800;
const STARTING_SIZE = 16;
let red = 81;
let green = 215;
let blue = 19;
let isDrawing = false;
let isIncremental = false;

document.body.onmousedown = () => (isDrawing = true);
document.body.onmouseup = () => (isDrawing = false);

const board = document.querySelector(".board");
const sizeBtn = document.querySelector(".size");
const resetBtn = document.querySelector(".reset");
const incrementBtn = document.querySelector(".increment");
const colorPicker = document.querySelector("#colorPicker");

function paintBlock(event) {
	event.preventDefault();

	if (event.type === "mouseover" && !isDrawing) return;

	if (event.target.classList.contains("block")) {
		changeColor(event);
	}
}

function changeColor(event) {
	let alpha = 1;
	if (isIncremental) {
		alpha = Number(event.target.dataset.saturation);

		if (alpha < 1.0) {
			//multiply by 10 to prevent 0.999999... case
			alpha *= 10;
			alpha += 1;
			alpha /= 10;
		}
	}
	event.target.dataset.saturation = alpha;
	event.target.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
}

function getRGB(HEX) {
	HEX = HEX.slice(1);

	red = parseInt(HEX.substring(0, 2), 16);
	green = parseInt(HEX.substring(2, 4), 16);
	blue = parseInt(HEX.substring(4, 6), 16);
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
		block.dataset.saturation = 0;
	});
});

incrementBtn.addEventListener("click", () => {
	isIncremental = !isIncremental;
	incrementBtn.classList.toggle("active");
});

colorPicker.addEventListener("change", (event) => {
	getRGB(event.target.value);
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
			block.dataset.saturation = 0;
			lane.appendChild(block);
		}
		board.appendChild(lane);
	}
}

drawBoard(STARTING_SIZE, STARTING_SIZE);
