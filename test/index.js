'use strict';

const assert = require('assert');

const ejsRunner = require('../lib/languages/ejs');
const pugRunner = require('../lib/languages/pug');
const handlebarsRunner = require('../lib/languages/handlebars');

const sampleHtml = `<h1>Colors</h1><ul><li><strong>red</strong></li><li><ahref="#Green">green</a></li><li><ahref="#Blue">blue</a></li></ul>`;

describe('simple', () => {
	it('ejs', (done) => {
		ejsRunner.compile('simple', () => {
			const renderedHtml = ejsRunner.render('simple').replace(/\s/g, '');

			assert.equal(renderedHtml, sampleHtml)
			done();
		});
	});

	it('pug', (done) => {
		pugRunner.compile('simple', () => {
			const renderedHtml = pugRunner.render('simple').replace(/\s/g, '');

			assert.equal(renderedHtml, sampleHtml)
			done();
		});
	});

	it('handlebars', (done) => {
		handlebarsRunner.compile('simple', () => {
			const renderedHtml = handlebarsRunner.render('simple').replace(/\s/g, '');

			assert.equal(renderedHtml, sampleHtml)
			done();
		});
	});
});
