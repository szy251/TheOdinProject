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
	if (key === "Enter") key = "=";

	const handlers = {
		0: handleNumber,
		1: handleNumber,
		2: handleNumber,
		3: handleNumber,
		4: handleNumber,
		5: handleNumber,
		6: handleNumber,
		7: handleNumber,
		8: handleNumber,
		9: handleNumber,
		"+": handleSymbol,
		"-": handleSymbol,
		x: handleSymbol,
		"/": handleSymbol,
		"=": handleEqual,
		Backspace: handleBackspace,
		Delete: handleClear,
		Escape: handleClear,
		".": handleDot,
		",": handleDot,
		n: handleSign,
	};

	if (handlers[key]) {
		event.preventDefault();
		handlers[key](key);
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
		initUnedited(value);
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
		initUnedited("0");
		return;
	}
	displayCurr.textContent = -Number(displayCurr.textContent);
}

function handleDot() {
	if (errorState) return;
	if (!edited) {
		initUnedited("0.");
		return;
	}
	if (!displayCurr.textContent.includes("."))
		displayCurr.textContent = displayCurr.textContent + ".";
	else if (displayCurr.textContent.at(-1) === ".")
		displayCurr.textContent = displayCurr.textContent.slice(0, -1);
}

function handleBackspace() {
	if (errorState) return;
	if (!edited) {
		initUnedited("0");
		return;
	}
	let currNum = displayCurr.textContent;
	if (currNum.length === 1 || (currNum.length === 2 && currNum.at(0) === "-")) {
		currNum = "0";
	} else {
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

function initUnedited(currText) {
	edited = true;
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

function operate(a, b, symbol) {
	switch (symbol) {
		case "+":
			return Number((a + b).toFixed(4));
		case "-":
			return Number((a - b).toFixed(4));
		case "x":
			return Number((a * b).toFixed(4));
		case "/":
			if (b == 0) return "Error";
			return Number((a / b).toFixed(4));
		default:
			return "Error";
	}
}
