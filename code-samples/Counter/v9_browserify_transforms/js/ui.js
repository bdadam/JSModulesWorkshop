var $ = require('jquery');
var PubSub = require('./lib/pubsub.min');
var counter = require('./counter');

var fs = require('fs');
var html = fs.readFileSync('./templates/ui.html', 'utf8');

function update() {
	$('[data-counter-value]').html(counter.getValue());
}

function init() {
	$('.container').append(html);

	$('[data-inc]').click(function() {
		var value = $(this).data('inc');
		counter.inc(value);
		update();
	});

	$('[data-dec]').click(function() {
		var value = $(this).data('dec');
		counter.dec(value);
		update();
	});

	$('[data-custom-increment]').submit(function() {
		var value = $(this).find('input').val();
		counter.inc(value);
		update();

		return false;
	});

	$('[data-reset]').click(function() {
		counter.reset();
		update();
	});
}

module.exports = {
	init: init,
	update: update
};
