namespace('company.app');

company.app.counter = (function() {
	var ctr = 0;
	var parser = company.app.parser;

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
}());