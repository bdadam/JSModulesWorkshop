var PubSub = require('./lib/pubsub.min');
var $ = require('./lib/jquery.min');

function updateUI(newValue) {
	$('[data-counter-value]').html(newValue);
}

$('[data-inc]').click(function() {
	var value = $(this).data('inc');
	PubSub.publish('user/inc', value);
});

$('[data-dec]').click(function() {
	var value = $(this).data('dec');
	PubSub.publish('user/dec', value);
});

$('[data-custom-increment]').submit(function() {
	var value = $(this).find('input').val();
	PubSub.publish('user/inc', value);
	return false;
});

$('[data-reset]').click(function() {
	PubSub.publish('reset');
});

PubSub.subscribe('valueChanged', function(newValue) {
	updateUI(newValue);
});

PubSub.publish('reset');
