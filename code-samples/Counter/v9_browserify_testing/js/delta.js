var $ = require('jquery');
var PubSub = require('./lib/pubsub.min');

var fs = require('fs');
var html = fs.readFileSync('./templates/delta.html', 'utf8');
	
var lastValue;
var el;

function formatNumber(num) {
	return num.toFixed(2);
}

function showDelta(delta) {
	if (el) {
		el.text('Counter value was lastly changed by: ' + formatNumber(delta));
	}
}

PubSub.subscribe('counterValueReset', function(initialValue) {
	lastValue = 0;
	if (el) {
		el.text('Counter value was reset to: ' + formatNumber(initialValue));
	}
});

PubSub.subscribe('counterValueChanged', function(newValue) {
	showDelta(newValue - lastValue);
	lastValue = newValue;
});

module.exports = {
	init: function() {
		$('.container').append(html);
		el = $('[data-delta]');
	}
};