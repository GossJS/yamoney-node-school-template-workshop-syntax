'use strict';

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const LANGS_LIST = [
	'ejs',
	'handlebars',
	'pug'
];

require("babel-register")({
	only: /\/templates\/simple.react.js/
});

const langs = require('require-all')(__dirname + '/lib/languages');

LANGS_LIST.forEach((lang, key) => {
	suite.add(lang, () => {
		langs[lang].compile('simple', () => {
			langs[lang].render('simple');
		});
	});
});

suite.on('cycle', function(event) {
	console.log(String(event.target));
})
.on('complete', function() {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({'async': true});
