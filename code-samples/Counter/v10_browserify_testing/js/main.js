var ui = require('./ui');
var counter = require('./counter');
var delta = require('./delta');

ui.init();
ui.update();

delta.init();

counter.reset();
