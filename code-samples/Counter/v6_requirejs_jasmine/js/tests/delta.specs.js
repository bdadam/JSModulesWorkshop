describe('testing delta', function() {

	var PubSub, delta;

	beforeEach(function(done) {
		require.undef('pubsub');
		require.undef('delta');

		require(['pubsub', 'delta'], function(ps, d) {
			PubSub = ps;
			delta = d;

			done();
		});
	});

	it('should listen for counter events', function() {

		delta.init();

		var node = document.querySelector('[data-delta]');

		PubSub.publish('counterValueReset', 0);

		expect(node.innerHTML).toEqual('Counter value was reset to: 0.00');

		PubSub.publish('counterValueChanged', 123);

		expect(node.innerHTML).toEqual('Counter value was lastly changed by: 123.00');

	});
});
