const sumAll = function (first, secodn) {
	if (
		typeof first !== "number" ||
		typeof secodn !== "number" ||
		first < 0 ||
		secodn < 0 ||
		Math.floor(first) !== first ||
		Math.floor(secodn) !== secodn
	)
		return "ERROR";

	//I used sum of arithemtic sequence so I can do it witohout for loop and it works always the same
	return ((Math.abs(first - secodn) + 1) * (first + secodn)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
