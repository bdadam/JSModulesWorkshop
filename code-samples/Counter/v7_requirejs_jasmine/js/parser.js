define([], function() {
	var nums = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
		ten: 10
	};

	function trim(str) {
		return str.replace(/^\s+|\s+$/g, '');
	}

	function parseNumber(value) {
		value = value || '';
		value = trim('' + value);

		if (nums[value]) {
			return nums[value];
		}

		var x = parseFloat(value);

		if (!isNaN(x)) {
			return x;
		}

		return 0;
	}

	return {
		parseNumber: parseNumber
	};
});