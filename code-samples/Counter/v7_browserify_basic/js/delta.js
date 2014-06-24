var $ = require('jquery');
var PubSub = require('./lib/pubsub.min');
	
var lastValue;
var el = $('[data-delta]');

function formatNumber(num) {
	return num.toFixed(2);
}

function showDelta(delta) {
	el.text('Counter value was lastly changed by: ' + formatNumber(delta));
}

PubSub.subscribe('counterValueReset', function(initialValue) {
	lastValue = 0;
	el.text('Counter value was reset to: ' + formatNumber(initialValue));
});

PubSub.subscribe('counterValueChanged', function(newValue) {
	showDelta(newValue - lastValue);
	lastValue = newValue;
});
