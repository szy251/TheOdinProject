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

function operate(a, b, sing) {
	switch (sing) {
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
