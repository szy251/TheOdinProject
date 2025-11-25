const palindromes = function (str) {
	let str1 = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
	revStr = str1.split("").reverse().join("");
	return str1 === revStr;
};

// Do not edit below this line
module.exports = palindromes;
