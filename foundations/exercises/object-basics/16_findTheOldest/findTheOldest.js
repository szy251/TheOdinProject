const findTheOldest = function (arr) {
	return arr.reduce((possible, current) => {
		let thisYear = new Date().getFullYear();
		let age1;
		let age2;
		if (possible.yearOfDeath === undefined) {
			age1 = thisYear - possible.yearOfBirth;
		} else {
			age1 = possible.yearOfDeath - possible.yearOfBirth;
		}
		if (current.yearOfDeath === undefined) {
			age2 = thisYear - possible.yearOfBirth;
		} else {
			age2 = current.yearOfDeath - current.yearOfBirth;
		}
		return age1 > age2 ? possible : current;
	});
};

// Do not edit below this line
module.exports = findTheOldest;
