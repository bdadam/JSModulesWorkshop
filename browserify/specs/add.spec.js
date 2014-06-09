var add = require('../src/add');

describe('', function() {
	it('should sum two numbers correcty', function() {
		expect(add(3, 5)).toBe(8);
	});
});