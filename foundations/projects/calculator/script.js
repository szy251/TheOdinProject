let dotUsed = false;
let minusSign = false;
let secondDoing = false;
let edited = false;
let afterEqual = false;
let errorState = false;

let firstNumber = 0;
let secondNumber = 0;
let symbol = "";

const numBtns = document.querySelectorAll(".num");
const displayWhole = document.querySelector(".whole");
const displayCurr = document.querySelector(".curr");
const signBtn = document.querySelector(".sign");
const dotBtn = document.querySelector(".dot");
const backBtn = document.querySelector(".backspace");
const symbolBtn = document.querySelectorAll(".symbol");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");

numBtns.forEach((btn) => {
	btn.addEventListener("click", () => handleNumber(btn.textContent));
});
signBtn.addEventListener("click", handleSign);
dotBtn.addEventListener("click", handleDot);
backBtn.addEventListener("click", handleBackspace);
symbolBtn.forEach((btn) => {
	btn.addEventListener("click", () => handleSymbol(btn.textContent));
});
equalBtn.addEventListener("click", handleEqual);
clearBtn.addEventListener("click", handleClear);

document.addEventListener("keydown", (event) => {
	let key = event.key;

	if (key === "*") key = "x";

	switch (key) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			event.preventDefault();
			handleNumber(key);
			break;
		case "+":
		case "-":
		case "x":
		case "/":
			event.preventDefault();
			handleSymbol(key);
			break;
		case "Enter":
		case "=":
			event.preventDefault();
			handleEqual();
			break;
		case "Backspace":
			event.preventDefault();
			handleBackspace();
			break;
		case "Delete":
		case "Escape":
			event.preventDefault();
			handleClear();
			break;
		case "plus-minus":
			event.preventDefault();
			handleSign();
			break;
		case ".":
		case ",":
			event.preventDefault();
			handleDot();
			break;
		default:
			break;
	}
});

document.addEventListener("click", (event) => {
	const button = event.target.closest("button");
	if (button) {
		button.blur();
	}
});

function handleNumber(value) {
	if (errorState) return;
	if (displayCurr.textContent.length >= 15 && edited) {
		return;
	}
	if (!edited) {
		initUnedited(false, false, value);
		return;
	}
	let currNum = displayCurr.textContent;
	if (currNum === "-0") {
		currNum = "-" + value;
	} else if (currNum === "0") {
		currNum = value;
	} else {
		currNum += value;
	}
	displayCurr.textContent = currNum;
}

function handleSign() {
	if (errorState) return;
	if (!edited) {
		initUnedited(true, false, "-0");
		return;
	}
	if (minusSign) {
		displayCurr.textContent = displayCurr.textContent.slice(1);
	} else {
		displayCurr.textContent = "-" + displayCurr.textContent;
	}
	minusSign = !minusSign;
}

function handleDot() {
	if (errorState) return;
	if (!edited) {
		initUnedited(false, true, "0.");
		return;
	}
	if (!dotUsed) {
		displayCurr.textContent = displayCurr.textContent + ".";
		dotUsed = true;
	} else {
		if (displayCurr.textContent.at(-1) === ".") {
			displayCurr.textContent = displayCurr.textContent.slice(0, -1);
			dotUsed = false;
		}
	}
}

function handleBackspace() {
	if (errorState) return;
	if (!edited) {
		initUnedited(false, false, "0");
		return;
	}
	let currNum = displayCurr.textContent;
	if (currNum.length === 1) {
		currNum = "0";
	} else if (currNum.length === 2 && minusSign) {
		currNum = "-0";
	} else {
		if (currNum.slice(-1) === ".") dotUsed = false;
		currNum = currNum.slice(0, -1);
	}
	displayCurr.textContent = currNum;
}

function handleSymbol(currSymbol) {
	if (errorState) return;
	if (!secondDoing) {
		firstNumber = Number(displayCurr.textContent);
		symbol = currSymbol;
		secondDoing = true;
		edited = false;
		displayWhole.textContent = numberString(firstNumber) + " " + symbol;
	} else if (edited) {
		secondNumber = Number(displayCurr.textContent);
		firstNumber = operate(firstNumber, secondNumber, symbol);
		displayCurr.textContent = firstNumber.toString();
		symbol = currSymbol;
		edited = false;
		displayWhole.textContent = numberString(firstNumber) + " " + symbol;
	} else {
		symbol = currSymbol;
		displayWhole.textContent = numberString(firstNumber) + " " + symbol;
	}
}

function handleEqual() {
	if (errorState) return;
	if (symbol !== "") {
		if (secondDoing) {
			secondNumber = Number(displayCurr.textContent);
			secondDoing = false;
		}
		displayWhole.textContent =
			numberString(firstNumber) + " " + symbol + " " + numberString(secondNumber) + " =";
		firstNumber = operate(firstNumber, secondNumber, symbol);
		if (firstNumber == "Error") {
			displayWhole.textContent = "";
			displayCurr.textContent = "Error use C to clear";
			errorState = true;
			return;
		}
		displayCurr.textContent = firstNumber.toString();
		edited = false;
		afterEqual = true;
	}
}

function handleClear() {
	dotUsed = false;
	minusSign = false;
	secondDoing = false;
	edited = false;
	afterEqual = false;
	errorState = false;

	firstNumber = 0;
	secondNumber = 0;
	symbol = "";

	displayCurr.textContent = "0";
	displayWhole.textContent = "";
}

function initUnedited(minus, doted, currText) {
	edited = true;
	minusSign = minus;
	dotUsed = doted;
	if (afterEqual) {
		displayWhole.textContent = numberString(firstNumber) + " " + symbol;
		secondDoing = true;
	}
	afterEqual = false;
	displayCurr.textContent = currText;
}

function numberString(num) {
	if (num >= 0) return num.toString();
	return `(${num})`;
}

function add(a, b) {
	return Number((a + b).toFixed(4));
}
function sub(a, b) {
	return Number((a - b).toFixed(4));
}
function mlt(a, b) {
	return Number((a * b).toFixed(4));
}
function div(a, b) {
	if (b == 0) return "Error";
	return Number((a / b).toFixed(4));
}

function operate(a, b, symbol) {
	switch (symbol) {
		case "+":
			return add(a, b);
		case "-":
			return sub(a, b);
		case "x":
			return mlt(a, b);
		case "/":
			return div(a, b);
		default:
			return "Error";
	}
}
