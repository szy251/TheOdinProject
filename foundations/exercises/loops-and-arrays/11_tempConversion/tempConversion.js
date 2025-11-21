function oneDecimal(num) {
	return Math.round(num * 10) / 10;
}

const convertToCelsius = function (fahrenheit) {
	let celsius = ((fahrenheit - 32) * 5) / 9;
	return oneDecimal(celsius);
};

const convertToFahrenheit = function (celsius) {
	let fahrenheit = (celsius * 9) / 5 + 32;
	return oneDecimal(fahrenheit);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
