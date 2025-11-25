const fibonacci = function (place) {
	if (typeof place == "string") place = Number.parseInt(place);
	if (place < 0) return "OOPS";
	if (place === 0) return 0;
	let first = 1;
	let second = 1;
	for (let i = 3; i <= place; i++) {
		let tmp = first;
		first += second;
		second = tmp;
	}
	return first;
};

// Do not edit below this line
module.exports = fibonacci;
