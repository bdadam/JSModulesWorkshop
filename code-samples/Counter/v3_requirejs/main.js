require.config({
	baseUrl: '.',
	paths: {
		jquery: 'lib/jquery.min',
		pubsub: 'lib/pubsub.min'
	}
});

require(['counter', 'ui']);
