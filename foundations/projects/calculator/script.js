let dotUsed = false;
let minusSing = false;

const numBtns = document.querySelectorAll(".num");
const displayCalculator = document.querySelector(".display");
const singBtn = document.querySelector(".sing");
const dotBtn = document.querySelector(".dot");
const backBtn = document.querySelector(".backspace");

numBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		let currNum = displayCalculator.textContent;
		if (currNum === "-0") {
			currNum = "-" + btn.textContent;
		} else if (currNum === "0") {
			currNum = btn.textContent;
		} else {
			currNum += btn.textContent;
		}
		displayCalculator.textContent = currNum;
	});
});

singBtn.addEventListener("click", () => {
	if (minusSing) {
		displayCalculator.textContent = displayCalculator.textContent.slice(1);
	} else {
		displayCalculator.textContent = "-" + displayCalculator.textContent;
	}
	minusSing = !minusSing;
});

dotBtn.addEventListener("click", () => {
	if (!dotUsed) {
		displayCalculator.textContent = displayCalculator.textContent + ".";
		dotUsed = true;
	} else {
		if (displayCalculator.textContent.at(-1) === ".") {
			displayCalculator.textContent = displayCalculator.textContent.slice(0, -1);
			dotUsed = false;
		}
	}
});

backBtn.addEventListener("click", () => {
	let currNum = displayCalculator.textContent;
	if (currNum.length === 1) {
		currNum = "0";
	} else if (currNum.length === 2 && minusSing) {
		currNum = "-0";
	} else {
		if (currNum.slice(-1) === ".") dotUsed = false;
		currNum = currNum.slice(0, -1);
	}
	displayCalculator.textContent = currNum;
});

function add(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}
function mlt(a, b) {
	return a * b;
}
function div(a, b) {
	if (b == 0) return "Error, can't divide by 0";
	return a / b;
}

function operate(a, b, symbol) {
	switch (symbol) {
		case "+":
			return add(a, b);
		case "-":
			return sub(a, b);
		case "*":
			return mlt(a, b);
		case "/":
			return div(a, b);
		default:
			return "Error";
	}
}
