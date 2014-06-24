var test = require('tape');

var counter = require('../js/counter');

test('counter should count', function(t) {
	t.plan(2);

	counter.reset();
	t.equal(counter.getValue(), '0.00');

	counter.inc(3);
	t.equal(counter.getValue(), '3.00');
});