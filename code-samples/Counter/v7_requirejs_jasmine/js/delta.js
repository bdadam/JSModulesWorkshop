define(['jquery', 'pubsub', 'text!delta.html'], function($, PubSub, html) {

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

	return {
		init: function() {
			$('.container').append(html);
			el = $('[data-delta]');
		}
	};
});