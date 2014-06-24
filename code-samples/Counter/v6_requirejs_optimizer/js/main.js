require(['ui', 'counter', 'delta'], function(ui, counter, delta) {
	
	ui.init();
	ui.update();

	delta.init();
	
	counter.reset();

});