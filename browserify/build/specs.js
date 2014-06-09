(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var add = require('../src/add');

describe('', function() {
	it('should sum two numbers correcty', function() {
		expect(add(3, 5)).toBe(8);
	});
});
},{"../src/add":5}],2:[function(require,module,exports){
var add = require('../src/add');

describe('Testing basic maths', function() {
	it('should sum two numbers correcty', function() {
		
		expect(add(3, 5)).toBe(8);
		
		expect(add(13, 15)).toBe(28);

	});
});
},{"../src/add":5}],3:[function(require,module,exports){
console.log('main.specs');
},{}],4:[function(require,module,exports){
require('../src/main');

describe('', function() {
	it('', function() {
		expect(document.title).toEqual('3');
	});
});
},{"../src/main":6}],5:[function(require,module,exports){
module.exports = function(a, b) {
	return a + b;
};
},{}],6:[function(require,module,exports){
'use strict';

var add = require('./add');
var x = add(1, 2);

document.title = x;
},{"./add":5}]},{},[1,2,3,4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcUHJvamVjdHNcXEpTTW9kdWxlc1dvcmtzaG9wXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGdydW50LWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcd2F0Y2hpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovUHJvamVjdHMvSlNNb2R1bGVzV29ya3Nob3AvYnJvd3NlcmlmeS9zcGVjcy9hZGQuc3BlYy5qcyIsIkM6L1Byb2plY3RzL0pTTW9kdWxlc1dvcmtzaG9wL2Jyb3dzZXJpZnkvc3BlY3MvYWRkLnNwZWNzLmpzIiwiQzovUHJvamVjdHMvSlNNb2R1bGVzV29ya3Nob3AvYnJvd3NlcmlmeS9zcGVjcy9tYWluLnNwZWMuanMiLCJDOi9Qcm9qZWN0cy9KU01vZHVsZXNXb3Jrc2hvcC9icm93c2VyaWZ5L3NwZWNzL21haW4uc3BlY3MuanMiLCJDOi9Qcm9qZWN0cy9KU01vZHVsZXNXb3Jrc2hvcC9icm93c2VyaWZ5L3NyYy9hZGQuanMiLCJDOi9Qcm9qZWN0cy9KU01vZHVsZXNXb3Jrc2hvcC9icm93c2VyaWZ5L3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYWRkID0gcmVxdWlyZSgnLi4vc3JjL2FkZCcpO1xyXG5cclxuZGVzY3JpYmUoJycsIGZ1bmN0aW9uKCkge1xyXG5cdGl0KCdzaG91bGQgc3VtIHR3byBudW1iZXJzIGNvcnJlY3R5JywgZnVuY3Rpb24oKSB7XHJcblx0XHRleHBlY3QoYWRkKDMsIDUpKS50b0JlKDgpO1xyXG5cdH0pO1xyXG59KTsiLCJ2YXIgYWRkID0gcmVxdWlyZSgnLi4vc3JjL2FkZCcpO1xyXG5cclxuZGVzY3JpYmUoJ1Rlc3RpbmcgYmFzaWMgbWF0aHMnLCBmdW5jdGlvbigpIHtcclxuXHRpdCgnc2hvdWxkIHN1bSB0d28gbnVtYmVycyBjb3JyZWN0eScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRleHBlY3QoYWRkKDMsIDUpKS50b0JlKDgpO1xyXG5cdFx0XHJcblx0XHRleHBlY3QoYWRkKDEzLCAxNSkpLnRvQmUoMjgpO1xyXG5cclxuXHR9KTtcclxufSk7IiwiY29uc29sZS5sb2coJ21haW4uc3BlY3MnKTsiLCJyZXF1aXJlKCcuLi9zcmMvbWFpbicpO1xyXG5cclxuZGVzY3JpYmUoJycsIGZ1bmN0aW9uKCkge1xyXG5cdGl0KCcnLCBmdW5jdGlvbigpIHtcclxuXHRcdGV4cGVjdChkb2N1bWVudC50aXRsZSkudG9FcXVhbCgnMycpO1xyXG5cdH0pO1xyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuXHRyZXR1cm4gYSArIGI7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGFkZCA9IHJlcXVpcmUoJy4vYWRkJyk7XHJcbnZhciB4ID0gYWRkKDEsIDIpO1xyXG5cclxuZG9jdW1lbnQudGl0bGUgPSB4OyJdfQ==
