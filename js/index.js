requirejs.config({
	// By default load any module IDs from js dir
	baseUrl: 'js'
});

requirejs([
	"vendor/ractive",
	"vendor/agave",
	"vendor/polyfills",
	"text!/templates/atemplate.mustache",
	"json!/json/somedata.json",
], function(Ractive, agave, unused, aTemplate, someData) {

	agave.enable('av');

	var query = function(selector) { return document.querySelector(selector) };
	var queryAll = function(selector) { return document.querySelectorAll(selector) };
	var log = console.log.bind(console)

	var exampleBinding = new Ractive({
		el: query('.some-binding'),
		data: someData,
		template: aTemplate
	});

})

