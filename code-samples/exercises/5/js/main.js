require.config({
	baseUrl: "js",
	paths: {
		jquery: 'lib/jquery.min',
		pubsub: 'lib/pubsub.min',
		text: 'lib/text'
	}
});

require(['ui', 'counter', 'delta'], function(ui, counter, delta) {
	
	ui.init();
	ui.update();

	delta.init();
	
	counter.reset();

});