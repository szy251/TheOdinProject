const removeFromArray = function (arr, ...dells) {
	let result = arr;
	for (let dell of dells) {
		result = result.filter((elem) => elem !== dell);
	}
	return result;
	//in theory my solution passed all tests but seems like code in solution folder is much better
};

// Do not edit below this line
module.exports = removeFromArray;
