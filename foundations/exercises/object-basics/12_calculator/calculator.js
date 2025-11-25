const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (arr) {
	return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function (base, exp) {
	//should be base**exp but i wanted to do my algorithm
	if (exp === 0) return 1;
	let result = base;
	while (exp > 1) {
		if (exp % 2 == 0) {
			result *= result;
			exp /= 2;
		} else {
			result = result * result * base;
			exp = (exp - 1) / 2;
		}
	}
	return result;
};

const factorial = function (n) {
	result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
