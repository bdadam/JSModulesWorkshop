var add = require('../src/add');

describe('Testing basic maths', function() {
	it('should sum two numbers correcty', function() {
		
		expect(add(3, 5)).toBe(8);
		
		expect(add(13, 15)).toBe(28);

	});
});