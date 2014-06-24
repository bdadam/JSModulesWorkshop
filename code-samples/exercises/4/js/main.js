require.config({
	baseUrl: "js",
	paths: {
		jquery: 'lib/jquery.min',
		pubsub: 'lib/pubsub.min'
	}
});

require(['ui', 'counter', 'delta'], function(ui, counter, delta) {
	
	ui.init();
	ui.update();
	counter.reset();

});