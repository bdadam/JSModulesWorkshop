define(['pubsub', 'parser'], function(PubSub, parser) {
	var ctr = 0;

	var counter = {
		inc: function(value) {
			ctr += (parser.parseNumber(value) || 1);
			PubSub.publish('valueChanged', ctr);
		},

		dec: function(value) {
			ctr -= (parser.parseNumber(value) || 1);
			PubSub.publish('valueChanged', ctr);
		},

		reset: function() {
			ctr = 0;
			PubSub.publish('valueChanged', ctr);
		},

		getValue: function() {
			return ctr;
		}
	};

	PubSub.subscribe('user/inc', function(value) {
		counter.inc(value);
	});

	PubSub.subscribe('user/dec', function(value) {
		counter.dec(value);
	});

	PubSub.subscribe('reset', function() {
		counter.reset();
	});

	return counter;
});