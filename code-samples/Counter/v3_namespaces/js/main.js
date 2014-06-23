namespace('company.app');

company.app.main = function() {
	company.app.ui.init();
	company.app.ui.update();
	company.app.counter.reset();
};