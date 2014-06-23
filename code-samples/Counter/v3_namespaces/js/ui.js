namespace('company.app');

company.app.ui = (function() {

	var counter = company.app.counter;

	function update() {
		$('[data-counter-value]').html(counter.getValue());
	}

	function init() {
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

	return {
		init: init,
		update: update
	};
}());