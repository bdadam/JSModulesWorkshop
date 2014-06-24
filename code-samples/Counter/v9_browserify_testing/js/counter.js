var PubSub = require('./lib/pubsub.min');
var parser = require('./parser');

var ctr = 0;

module.exports = {
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
