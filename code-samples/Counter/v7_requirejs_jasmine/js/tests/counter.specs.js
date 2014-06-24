describe('testing counter', function() {

	var counter;

	beforeEach(function(done) {

		require.undef('counter'); // counter is in clean state for every test case
		
		require(['counter'], function(module) {

			counter = module;
			done();
		});
	});

	it('when resetting it should default to 0', function() {
		counter.reset();
		expect(counter.getValue()).toEqual('0.00');
	});

	it('should increase by one per default', function() {
		counter.reset();
		counter.inc();
		expect(counter.getValue()).toEqual('1.00');
	});

	it('should increase by 2', function() {
		counter.reset();
		counter.inc(2);
		expect(counter.getValue()).toEqual('2.00');
	});

	it('should increase by "six"', function() {
		counter.reset();
		counter.inc('six');
		expect(counter.getValue()).toEqual('6.00');
	});
});
