define([], function() {
	console.log('moduleA loaded');

	return {
		work: function() { console.log('Module A is working...'); }
	};
});