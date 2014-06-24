define(['parser', 'pubsub'], function(parser, PubSub) {
	var ctr = 0;

	return {
		inc: function(value) {
			ctr += (parser.parseNumber(value) || 1);
			PubSub.publish('counterValueChanged', ctr);
		},

		dec: function(value) {
			ctr -= (parser.parseNumber(value) || 1);
			PubSub.publish('counterValueChanged', ctr);
		},

		reset: function() {
			ctr = 0;
			PubSub.publish('counterValueReset', ctr);
		},

		getValue: function() {
			return ctr.toFixed(2);
		}
	};
});